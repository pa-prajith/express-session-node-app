const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

dotenv.config({ path: "./config/config.env" });
// Connect to database
const connectDB = require("./config/db.js");
const connection = connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// Session section starts
const sessionStore = new MongoStore({
  mongooseConnection: connection,
  collection: "session"
});

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store: sessionStore, 
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);


https: app.get("/", (req, res) => {
  res.send("This is from the express application");
});

const DEFAULT_PORT = 3422;
const PORT = process.env.PORT || DEFAULT_PORT;
app.listen(
  PORT,
  console.log(
    `Server running on mode ${process.env.NODE_ENV} in PORT - ${PORT}`
  )
);