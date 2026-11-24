const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const PORT = 5000;

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// depends_on only waits for the db container to START, not to be READY,
// so retry the connection until MySQL accepts it.
async function connectWithRetry(retries = 20, delayMs = 3000) {
  for (let i = 1; i <= retries; i++) {
    try {
      return await mysql.createConnection(dbConfig);
    } catch (err) {
      console.log(`DB not ready (attempt ${i}/${retries}): ${err.code || err.message}`);
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
  throw new Error('Could not connect to the database');
}

app.get('/', async (req, res) => {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const [rows] = await conn.query('SELECT NOW() AS now');
    await conn.end();
    res.send(`Hello from the web container! Connected to MySQL successfully. DB time: ${rows[0].now}`);
  } catch (err) {
    res.status(500).send(`Database connection failed: ${err.message}`);
  }
});

connectWithRetry()
  .then(async (conn) => {
    await conn.end();
    console.log('Connected to MySQL');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
