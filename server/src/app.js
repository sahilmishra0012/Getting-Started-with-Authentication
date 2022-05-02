const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const bcrypt = require("bcrypt")
const {User} = require("./models")

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// enable cors
app.use(cors());
app.options('*', cors());

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10).then((hash) => {
    console.log(hash);
    console.log(User.isEmailTaken(email));

    // Users.create({
    //   name: name,
    //   username: username,
    //   password: hash,
    // })
    //   .then(() => {
    //     res.json("USER REGISTERED");
    //   })
    //   .catch((err) => {
    //     if (err) {
    //       res.status(400).json({ error: err });
    //     }
    //   });
  });
});

module.exports = app;
