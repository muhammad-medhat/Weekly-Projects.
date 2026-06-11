import express from "express";
const router = express.Router();

// In-memory data
let todos = [
  { id: 1, text: "Learn Express", done: false },
  { id: 2, text: "Build an API", done: true },
  { id: 1, text: "Learn Express", done: false },
  { id: 2, text: "Build an API", done: true },
  { id: 1, text: "Learn Express", done: false },
  { id: 2, text: "Build an API", done: true },
];
router.get("/", (req, res) => {
  let result = todos;
  if (Object.keys(req.query).length > 0) {
    console.log(req.query);
  }
  if (req.query.done !== undefined) {
    const trueVal = req.query.done === "true";
    result = todos.filter((t) => t.done === trueVal);
  }
  res.status(200).json(result);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log("searching...", id);
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    res.status(200).send(todo);
  } else {
    res.status(404).json({ msg: "not found" });
  }
});

export default router;
