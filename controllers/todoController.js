const todoModel = require("../models/todoModels");

//curd
const getAllTodos = async (req, res) => {
  try {
    const todos = await todoModel.find();
    return res.status(200).json({
      message: "All Todos",
      data: todos,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getOneTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todoModel.findById(id);
    return res.status(200).json({
      message: "Todo Found",
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const { title, details } = req.body;
    if (!title) {
      return res.status(400).json({
        error: "title is required",
      });
    }
    const createTodo = await todoModel.create({ title, details });
    return res.status(201).json({
      message: "todo  created",
      data: createTodo,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createMultipleTodos = async (req, res) => {
  try {
    const todos = await todoModel.insertMany(req.body);

    return res.status(201).json({
      message: "multiple todos created",
      data: todos,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// const createTodo = async (req, res) => {
//   try {
//     let result;

//     if (Array.isArray(req.body)) {
//       result = await todoModel.insertMany(req.body);
//     } else {
//       result = await todoModel.create(req.body);
//     }

//     res.status(201).json({
//       message: "todo(s) created",
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const updateTodo = await todoModel.findByIdAndUpdate(
      id,
      { completed: true },
      { new: true },
    );
    return res.status(200).json({
      message: "todo updated",
      data: updateTodo,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await todoModel.findByIdAndDelete(id);
    return res.status(200).json({
      message: "deleted",
      data: deleteTodo,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTodos,
  getOneTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  createMultipleTodos,
};
