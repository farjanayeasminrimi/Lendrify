import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_DB_URI);
const db = client.db("Lendrify");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
