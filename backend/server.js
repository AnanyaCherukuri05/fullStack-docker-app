const express = require("express");
const { Pool } = require("pg");
const app = express();
const PORT = 5000;

// PostgreSQL connection
const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "testdb",
  port: process.env.DB_PORT || 5432,
});

app.get("/", (req, res) => {
  res.send("Hello from Backend 🚀");
});

// Example endpoint that checks DB connection
app.get("/api/db-check", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ success: true, time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
