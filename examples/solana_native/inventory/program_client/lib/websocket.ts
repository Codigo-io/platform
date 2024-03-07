import bs58 from "bs58";
import { Connection, PublicKey } from "@solana/web3.js";
import { deserialize, Schema } from "borsh";

import * as T from "./types";

const NOOP_PROGRAM_ADDRESS = "noopb9bkMVfRPU8AsbpTUg8AQkHtKwMYZiFUjNRtMmV";

const FEATURE_COMPRESSION = "onLogs_onCompressedData";

const trimBuffer = (buf: Buffer, startIndex: number): Buffer => {
  let newArrayBuffer = new ArrayBuffer(buf.length - startIndex);
  let newBuf = Buffer.from(newArrayBuffer);
  newBuf.set(buf.subarray(startIndex));

  return newBuf;
};

const copyBuffer = (buf: Buffer): Buffer => {
  let newArrayBuffer = new ArrayBuffer(buf.length);
  let newBuf = Buffer.from(newArrayBuffer);

  newBuf.set(buf);

  return newBuf;
};

const unpackUInt16 = (buf: Buffer): [number, Buffer] => {
  let uint16 = buf.readUInt16LE(0);
  let newBuf = trimBuffer(buf, 2);

  return [uint16, newBuf];
};

const unpackUInt32 = (buf: Buffer): [number, Buffer] => {
  let uint32 = buf.readUInt32LE(0);
  let newBuf = trimBuffer(buf, 4);

  return [uint32, newBuf];
};

const unpackPubkey = (buf: Buffer): [PublicKey, Buffer] => {
  let pubkeyBuffer = buf.slice(0, 32);
  return [new PublicKey(pubkeyBuffer), trimBuffer(buf, 32)];
};

type LogParser = (
  connection: Connection,
  signature: string,
  accountKey: string,
  emit?: boolean,
  types?: string[]
) => Promise<
  | boolean
  | T.StateCompressionAccountChangelog
  | T.StateCompressionAccountApplicationData
>;

type Callback = {
  callback: T.StateCompressionAccountCallback;
  types: Array<string>;
};

export class Websocket {
  private static instance: Websocket;

  private _listeners: {
    [key: string]: {
      [key: string]: {
        subscription?: number;
        callbacks?: Array<Callback>;
      };
    };
  };

  private _queue: Array<{
    signature: string;
    parser: LogParser;
    accountKey: string;
    types: Array<string>;
  }> = [];

  private _parsing: boolean = false;

  private constructor() {
    this._listeners = {};
    this._listeners[FEATURE_COMPRESSION] = {};
  }

  private _addToQueue(
    connection: Connection,
    signature: string,
    parser: LogParser,
    accountKey: string,
    types: Array<string> = []
  ) {
    const boundedParser = parser.bind(this);
    this._queue.push({ signature, parser: boundedParser, accountKey, types });
    this._startParsing(connection);
  }

  private _startParsing(connection: Connection) {
    if (this._parsing) return;
    this._parseAll(connection);
  }

  private async _parseAll(connection: Connection) {
    this._parsing = true;

    for (let i = 0; i < this._queue.length; i++) {
      if (!this._queue[0]) break;
      const { signature, parser, accountKey, types } = this._queue[0];
      if (
        (await parser(connection, signature, accountKey, true, types)) === true
      ) {
        this._queue.splice(0, 1);
      } else {
        this._queue.push({ signature, parser, accountKey, types });
        this._queue.splice(0, 1);
      }
    }

    this._parsing = false;
  }

  private async _parseCompressedData(
    connection: Connection,
    signature: string,
    accountKey: string,
    emit: boolean = true,
    types: Array<String> = []
  ): Promise<
    | boolean
    | T.StateCompressionAccountChangelog
    | T.StateCompressionAccountApplicationData
  > {
    let transaction: any;

    try {
      transaction = await connection.getParsedTransaction(signature);
    } catch (e) {
      console.log(e);
    }

    if (!transaction) return false;
    if (!transaction.meta) return true;
    if (!transaction.meta.innerInstructions) return true;
    if (!this._listeners[FEATURE_COMPRESSION]) return true;

    const listener = this._listeners[FEATURE_COMPRESSION][accountKey];

    if (!listener && emit) return true;

    let innerInstructions: Array<any> = [];

    transaction.meta.innerInstructions.forEach((i: any) => {
      if (i.instructions) {
        innerInstructions = innerInstructions.concat(i.instructions);
      }
    });
    for (let i = 0; i < innerInstructions.length; i++) {
      const innerInstruction = innerInstructions[i];
      if (innerInstruction.programId.toString() === NOOP_PROGRAM_ADDRESS) {
        try {
          const decoded = bs58.decode(innerInstruction.data);

          let buffer = Buffer.from(decoded);

          if (buffer.length >= 34) {
            let newBuffer = copyBuffer(buffer);

            let disc = -1;

            [disc, newBuffer] = unpackUInt16(buffer);

            const [pubkey] = unpackPubkey(newBuffer);

            if (disc === 0 && pubkey.toString() === accountKey) {
              const event = T.decodeStateCompressionAccountChangelog(
                deserialize(
                  T.StateCompressionAccountChangelogSchema,
                  newBuffer
                ) as Record<string, unknown>,
                signature,
                transaction.blockTime as number
              );

              if (listener && emit) {
                listener.callbacks?.forEach((callback) => {
                  if (callback.types.length === 0) {
                    callback.callback(event);
                  }
                });
              } else {
                return event;
              }
            } else if (disc > 0) {
              if (listener && emit) {
                listener.callbacks?.forEach((callback) => {
                  if (
                    disc <= callback.types.length &&
                    callback.types[disc - 1]
                  ) {
                    const StateCompressionAccountApplicationDataSchema: Schema =
                      {
                        struct: {
                          typeId: "u32",
                          tree: { array: { type: "u8", len: 32 } },
                          newLeaf: { array: { type: "u8", len: 32 } },
                          data: { array: { type: "u8" } },
                        },
                      };
                    const event =
                      T.decodeStateCompressionAccountApplicationData(
                        deserialize(
                          StateCompressionAccountApplicationDataSchema,
                          buffer
                        ) as Record<string, unknown>,
                        signature,
                        transaction.blockTime as number,
                        (T as any)[(types[disc - 1] as string) + "Schema"]
                      );
                    callback.callback(event);
                  }
                });
              } else if (!emit) {
                if (disc <= types.length && types[disc - 1]) {
                  const StateCompressionAccountApplicationDataSchema: Schema = {
                    struct: {
                      typeId: "u32",
                      tree: { array: { type: "u8", len: 32 } },
                      newLeaf: { array: { type: "u8", len: 32 } },
                      data: { array: { type: "u8" } },
                    },
                  };
                  return T.decodeStateCompressionAccountApplicationData(
                    deserialize(
                      StateCompressionAccountApplicationDataSchema,
                      buffer
                    ) as Record<string, unknown>,
                    signature,
                    transaction.blockTime as number,
                    (T as any)[(types[disc - 1] as string) + "Schema"]
                  );
                }
              }
            }
          }
        } catch (e) {
          console.log(e);
        }
      }
    }

    return true;
  }

  public static getInstance(): Websocket {
    if (!Websocket.instance) {
      Websocket.instance = new Websocket();
    }

    return Websocket.instance;
  }

  private async _createSubscriptionOnce(
    connection: Connection,
    feature: string,
    identifier: string,
    websocketFunction: Function,
    subscriptionFunction: Function
  ) {
    const listener = this._listeners[feature];
    if (!listener) return;
    if (!listener[identifier]) {
      const subscription = await websocketFunction.bind(connection)(
        new PublicKey(identifier),
        subscriptionFunction
      );
      listener[identifier] = {
        subscription,
        callbacks: [],
      };
    }
  }

  private _addCallback(
    feature: string,
    identifier: string,
    callback: Callback
  ) {
    const listener = this._listeners[feature];
    if (listener) listener[identifier]?.callbacks?.push(callback);
  }

  private _removeCallback(
    connection: Connection,
    feature: string,
    identifier: string,
    callback: T.StateCompressionAccountCallback
  ) {
    const featureListener = this._listeners[feature];
    if (!featureListener) return;
    const listener = featureListener[identifier];
    if (listener) {
      const callbackInListener = listener.callbacks?.find(
        (item) => item.callback === callback
      );
      if (callbackInListener) {
        listener.callbacks?.splice(
          listener.callbacks.indexOf(callbackInListener),
          1
        );
        if (
          listener.callbacks?.length === 0 &&
          listener.subscription !== undefined
        ) {
          connection.removeOnLogsListener(listener.subscription);
          delete featureListener[identifier];
        }
      }
    }
  }

  public async onCompressedData(
    connection: Connection,
    accountKey: PublicKey,
    callback: T.StateCompressionAccountCallback,
    types: Array<string> = []
  ) {
    await this._createSubscriptionOnce(
      connection,
      FEATURE_COMPRESSION,
      accountKey.toString(),
      connection.onLogs,
      (logs: any) => {
        if (!logs.err) {
          this._addToQueue(
            connection,
            logs.signature,
            this._parseCompressedData,
            accountKey.toString(),
            types
          );
        }
      }
    );

    this._addCallback(FEATURE_COMPRESSION, accountKey.toString(), {
      types,
      callback,
    });
  }

  public removeOnCompressData(
    connection: Connection,
    accountKey: PublicKey,
    callback: T.StateCompressionAccountCallback
  ) {
    this._removeCallback(
      connection,
      FEATURE_COMPRESSION,
      accountKey.toString(),
      callback
    );
  }

  public async getCompressDataHistory(
    connection: Connection,
    accountKey: PublicKey,
    until: string = "",
    types: Array<String> = []
  ) {
    const rv = [];
    try {
      let signatures = await connection.getSignaturesForAddress(
        accountKey,
        until
          ? {
              until,
            }
          : {}
      );
      if (signatures) {
        for (let i = 0; i < signatures.length; i++) {
          const signature = signatures[i];
          if (signature) {
            const event = await this._parseCompressedData(
              connection,
              signature.signature,
              accountKey.toString(),
              false,
              types
            );
            if (typeof event !== "boolean") rv.push(event);
          }
        }
      }
    } catch (e) {
      console.log(e);
    }

    return rv;
  }
}