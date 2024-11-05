require("dotenv").config();

import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
import express from "express";
import { Client } from "pg";

dotenv.config();
const app = express();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Database connection error", err));

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}
const sql = neon(process.env.DATABASE_URL);

app.get("/", async (req, res) => {
  try {
    const result = await sql`SELECT * FROM rocketLeagueCars`;
    res.json(result);
  } catch (err) {
    res.status(500).send("Error fetching database version");
  }
});




app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
