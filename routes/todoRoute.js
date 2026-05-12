const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const {
  getAllTodos,
  getOneTodo,
  createTodo,
  createMultipleTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.get("/getAll", getAllTodos);
router.get("/getOne/:id", getOneTodo);
router.post("/create", createTodo);
router.post("/create-multiple", createMultipleTodos);
router.patch("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
