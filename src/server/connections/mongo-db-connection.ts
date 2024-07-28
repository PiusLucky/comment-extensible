import { MongoClient, Db } from "mongodb";

interface MongoConnection {
  conn: Db | null;
  promise: Promise<Db> | null;
}

let cached: MongoConnection = (global as any).mongo;

// Singleton pattern to cache the connection
if (!cached) {
  cached = (global as any).mongo = {
    conn: null,
    promise: null,
  };
}

export const connectToMongoDatabase = async (
  mongoDBUrl: string,
  dbName: string
) => {
  if (cached.conn) return cached.conn;

  if (!mongoDBUrl) throw new Error("Missing mongoDBUrl");

  cached.promise =
    cached.promise ||
    MongoClient.connect(mongoDBUrl, {}).then((client) => client.db(dbName));

  cached.conn = await cached.promise;

  return cached.conn;
};
