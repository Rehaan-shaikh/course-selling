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

// Handle POST request for submitting feedback
app.post("/api/feedback", async (req, res) => {
  const { user, courseName, pros, cons } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO feedback (username, course_name, pros, cons) VALUES ($1, $2, $3, $4) RETURNING *",
      [user, courseName, pros, cons]
    );

    res.status(201).json(result.rows[0]); // Send the newly created feedback object
  } catch (err) {
    console.error("Error submitting feedback:", err);
    res.status(500).json({ error: "Failed to submit feedback" });
  }
});

// Handle GET request for fetching all feedback
app.get("/api/feedback", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM feedback");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching feedback:", err);
    res.status(500).json({ error: "Failed to fetch feedback" });
  }
});



// Add this endpoint to your backend
app.post("/confirm-payment", async (req, res) => {
  const { userId, courseIds } = req.body;
  
  try {
    // Update the user's course_id array with the new course IDs
    await db.query(
      "UPDATE users SET course_id = array_cat(course_id, $1) WHERE id = $2",
      [courseIds, userId]
    );
    // array_cat(course_id, $1) is a PostgreSQL function that concatenates two arrays:
    // course_id: The existing array in the course_id column.
    // $1: The new array of course IDs being added (provided as a parameter).

    res.status(200).json({ message: "Payment confirmed and courses updated successfully" });
  } catch (err) {
    console.error("Error confirming payment:", err);
    res.status(500).json({ error: "Failed to confirm payment" });
  }
});

app.get("/user-courses/:userId", async (req, res) => {
  const { userId } = req.params;   //using params to get userId of current login user

  try {
    // Fetch the user's course IDs
    const userResult = await db.query("SELECT course_id FROM users WHERE id = $1", [userId]);
    const courseIds = userResult.rows[0].course_id;

    if (!courseIds || courseIds.length === 0) {
      return res.status(200).json([]); // Return an empty array if no courses are found
    }

    // Fetch the course details for the user's course IDs
    const coursesResult = await db.query("SELECT * FROM courses WHERE id = ANY($1)", [courseIds]);
    //id = ANY($1) is a condition that checks if the id of a course matches any value in the array provided as $1
    console.log(coursesResult.rows);

    res.status(200).json(coursesResult.rows);
  } catch (err) {
    console.error("Error fetching user courses:", err);
    res.status(500).json({ error: "Failed to fetch user courses" });
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
