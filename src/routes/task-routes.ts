import { Router } from "express";
import TaskController from "../controllers/task-controller";

const routes = Router();

// GET ALL TASKS
routes.get("/", TaskController.getTasks);

// GET TASK BY ID
routes.get("/:id", TaskController.getTaskById);

// CREATE TASK
routes.post("/", TaskController.createTask);

// UPDATE TASK
routes.put("/:id", TaskController.updateTask);

// DELETE TASK
routes.delete("/:id", TaskController.deleteTask);

export default routes;
