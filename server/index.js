const express = require('express');
const app = express();
const mysql = require("mysql");
const session = require("express-session");

app.use(express.json()); // parse JSON request body


const db = mysql.createConnection({
    // host: "",
    // user: "",
    // password: "",
    // database: ""
});


app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);

    db.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
        if (error) throw error;
        // check if the results are greater than 0
        if(results.length > 0){
          //If the credentials are valid, set a session cookie
          req.session.user = username;
          res.send({ message: 'Login successful' });
        }
        else {
          res.status(401).send({ message: 'Invalid login credentials' });
        }
      });
    
  });


// Register endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  

  db.query(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [username, password],
    (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send({ message: 'Internal server error' });
      } else {
        res.send({ message: 'Registration successful' });
      }
    }
  );
});


db.connect((error) => {
  if (error) {
    console.error('Database connection error:', error);
    return;
  }

  console.log('Connected to the database');
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});