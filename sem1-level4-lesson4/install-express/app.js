/**
 * Initialize npm
 * Run the command (npm init -y) in the terminal.
 * Install Express
 * Run the command (npm install express)
 * Import Express in app.js
 * load the env variables from .env file
 * Run the command (npm install dotenv)
 * Create a .env file in the root directory and add the following line to it:
 * PORT=3000
 * Start the server
 * Run the command (node app.js) in the terminal.
 * then add routes for different endpoints
 */
import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
//Creating a Custom Middleware
// it must be placed before the routes, otherwise it will not work
// it must have three parameters (req, res, next)
// and it must call the next() function to pass the control to the next middleware or route handler

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello, from the home page!");
});
app.get("/about", (req, res) => {
  res.send("Hello, from the about page!");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
