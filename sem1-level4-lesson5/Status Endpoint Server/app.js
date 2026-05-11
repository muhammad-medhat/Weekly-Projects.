import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
// Add the timestamp logger:
function time(req, res, next) {
  console.log("time", new Date().toISOString());
  next();
}
app.use(time);

app.get("/", (req, res) => {
  res.json({
    status: "success",
    statusCode: 200,
    message: "Hello, from the home page!",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
