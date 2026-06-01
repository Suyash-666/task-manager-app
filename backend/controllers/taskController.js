const Task = require("../models/Task");

const createTask = async (req, res) => {

  try {

    const { title } = req.body;

    // Check title
    if (!title || title.trim() === ""){
      return res.status(400).json({
        message: "Title is required"
      });
    }

    // Create task
    const task = await Task.create({
      title,
      user: req.user.id
    });

    res.status(201).json({
      message: "Task created",
      task
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
const getTasks = async (req, res) => {

  try {

    // Find tasks belonging to logged-in user
    const tasks = await Task.find({
      user: req.user.id
    });

    res.status(200).json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
const updateTask = async (req, res) => {

  try {

    const task = await Task.findById(req.params.id);

    // Check task exists
    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    // Check ownership
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized"
      });
    }

    // Update task
    task.title = req.body.title || task.title;

    if (req.body.completed !== undefined) {
      task.completed = req.body.completed;
    }

    const updatedTask = await task.save();

    res.status(200).json(updatedTask);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
const deleteTask = async (req, res) => {

  try {

    const task = await Task.findById(req.params.id);

    // Check task exists
    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    // Check ownership
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized"
      });
    }

    await task.deleteOne();

    res.status(200).json({
      message: "Task deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
const getAllTasks = async (req, res) => {

  try {

    const tasks = await Task.find().populate("user", "name email");

    res.status(200).json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getAllTasks
};