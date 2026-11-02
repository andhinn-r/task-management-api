import { Request, Response } from "express";
import { Task } from "../types/task";

// Dummy Data
const dataTasks: Task[] = [
  {
    id: 1,
    title: "Belajar Express.js",
    description: "Memahami routing dan controller",
    status: "pending",
  },
  {
    id: 2,
    title: "Belajar TypeScript",
    description: "Memahami type dan interface",
    status: "completed",
  },
  {
    id: 3,
    title: "Membuat Task Management API",
    description: "Mengerjakan challenge backend day 1",
    status: "pending",
  },
  {
    id: 4,
    title: "Belajar REST API",
    description: "Memahami konsep dan cara kerja REST API",
    status: "pending",
  },
  {
    id: 5,
    title: "Menguji Task Management API",
    description: "Menguji seluruh endpoint menggunakan Postman",
    status: "completed",
  },
];

export class TaskController {
  // GET ALL TASKS
  getTasks = async (req: Request, res: Response) => {
    return res.status(200).json({
      success: true,
      message: "Get All Tasks Success",
      data: {
        tasks: dataTasks,
      },
    });
  };

  // GET TASK BY ID
  getTaskById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const task = dataTasks.find((task) => task.id === id);

    if (!Number.isInteger(id) || !task) {
      return res.status(404).json({
        success: false,
        message: "Task Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Get Task Detail Success",
      data: {
        task,
      },
    });
  };

  // CREATE TASK
  createTask = async (req: Request, res: Response) => {
    const { title, description, status } = req.body || {};

    if (
      typeof title !== "string" ||
      !title.trim() ||
      typeof description !== "string" ||
      !description.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required",
      });
    }

    if (status !== "pending" && status !== "completed") {
      return res.status(400).json({
        success: false,
        message: "Status must be pending or completed",
      });
    }

    const newId =
      dataTasks.length > 0
        ? Math.max(...dataTasks.map((task) => task.id)) + 1
        : 1;

    const newTask: Task = {
      id: newId,
      title: title.trim(),
      description: description.trim(),
      status,
    };

    dataTasks.push(newTask);

    return res.status(201).json({
      success: true,
      message: "Create Task Success",
      data: {
        task: newTask,
      },
    });
  };

  // UPDATE TASK
  updateTask = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const task = dataTasks.find((task) => task.id === id);

    if (!Number.isInteger(id) || !task) {
      return res.status(404).json({
        success: false,
        message: "Task Not Found",
      });
    }

    const { title, description, status } = req.body || {};

    if (
      typeof title !== "string" ||
      !title.trim() ||
      typeof description !== "string" ||
      !description.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required",
      });
    }

    if (status !== "pending" && status !== "completed") {
      return res.status(400).json({
        success: false,
        message: "Status must be pending or completed",
      });
    }

    task.title = title.trim();
    task.description = description.trim();
    task.status = status;

    return res.status(200).json({
      success: true,
      message: "Update Task Success",
      data: {
        task,
      },
    });
  };

  // DELETE TASK
  deleteTask = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const index = dataTasks.findIndex((task) => task.id === id);

    if (!Number.isInteger(id) || index === -1) {
      return res.status(404).json({
        success: false,
        message: "Task Not Found",
      });
    }

    const deletedTask = dataTasks.splice(index, 1)[0];

    return res.status(200).json({
      success: true,
      message: "Delete Task Success",
      data: {
        task: deletedTask,
      },
    });
  };
}

export default new TaskController();
