require("dotenv").config();

import express from "express";
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", async (_, res) => {
  const sql = neon(process.env.DATABASE_URL as string);
  const response = await sql`SELECT version()`;
  const { version } = response[0];
  res.json({ version });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
