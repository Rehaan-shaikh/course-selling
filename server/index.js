import express from "express"
import pg from "pg";
import bodyParser from "body-parser";


const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "courseSelling",
    password: "nkocet@123",
    port: 5432,
  });
  db.connect();

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body);
    try {
      // Save user to database
      await db.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
        [username, email, password]
      );
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      res.status(500).json({ error: 'User registration failed' });
    }
  });
  

  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Fetch user from the database
      const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);
      const user = result.rows[0];
  
      if (!user) return res.status(404).json({ error: 'User not found' });
  
      // Compare the provided password with the stored password
      if (password !== user.password) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Generate JWT
      const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
  
      res.json({ message: 'Login successful', token });
    } catch (err) {
      res.status(500).json({ error: 'Login failed' });
    }
  });

  
  const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
  
    try {
      const decoded = jwt.verify(token, 'your_jwt_secret');
      req.user = decoded;
      next();
    } catch (err) {
      res.status(403).json({ error: 'Invalid token' });
    }
  };
  
  // Example protected route
  app.get('/home', authenticate, (req, res) => {
    res.json({ message: `Welcome user ${req.user.id}` });
  });
  


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})