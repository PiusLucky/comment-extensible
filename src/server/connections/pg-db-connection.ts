import { Pool, PoolClient } from "pg";

interface PostgresConnection {
  conn: PoolClient | null;
  promise: Promise<PoolClient> | null;
}

let cached: PostgresConnection = (global as any).pg;

// Singleton pattern to cache the connection
if (!cached) {
  cached = (global as any).pg = {
    conn: null,
    promise: null,
  };
}

export const connectToPostgresDatabase = async (pgConfig: {
  user: string;
  host: string;
  database: string;
  password: string;
  port: number;
}) => {
  if (cached.conn) return cached.conn;

  if (!pgConfig) throw new Error("Missing PostgreSQL configuration");

  const pool = new Pool(pgConfig);

  cached.promise =
    cached.promise ||
    pool.connect().then((client) => {
      // Return the client and keep it in the cache
      return client;
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
