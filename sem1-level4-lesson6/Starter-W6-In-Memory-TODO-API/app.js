import dotenv from "dotenv";
import express from "express";
import router from "./router/todos.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

function time(req, res, next) {
  console.log("time", new Date().toISOString());
  next();
}
app.use(time);
app.use(express.json());
app.use("/todos", router);

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
