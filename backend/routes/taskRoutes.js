const express = require("express");
const adminOnly = require("../middleware/adminMiddleware");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getAllTasks
} = require("../controllers/taskController");
/**
 * @swagger
 * /api/v1/tasks:
 *   post:
 *     summary: Create a task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Task created
 */
router.post("/", protect, createTask);
/**
 * @swagger
 * /api/v1/tasks:
 *   get:
 *     summary: Get logged-in user tasks
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of tasks
 */
router.get("/", protect, getTasks);
router.get("/all", protect, adminOnly, getAllTasks);
/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   put:
 *     summary: Update task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Task updated
 */
router.put("/:id", protect, updateTask);
/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   delete:
 *     summary: Delete task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Task deleted
 */
router.delete("/:id", protect, deleteTask);


module.exports = router;