import express from "express";
import pg from "pg";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "courseSelling",
  password: "nkocet@123",
  port: 5432,
});
db.connect();

// Handles POST requests to the /register endpoint.
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    await db.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
      [username, email, password]
    );
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "User registration failed" });
  }
});

// Handles POST requests to the /login endpoint.
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await db.query("SELECT * FROM users WHERE username = $1", [username]);
    const user = result.rows[0];

    if (!user) return res.status(404).json({ error: "User not found" });

    if (password !== user.password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Return the user details (excluding sensitive information) for the front end
    res.status(200).json({
      message: "Login successful",
      user: { id: user.id, username: user.username, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

// A protected route for fetching user-specific data without tokens
app.get("/home", async (req, res) => {
  try {
    const users = await db.query("SELECT id, username, email FROM users");
    res.json(users.rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
