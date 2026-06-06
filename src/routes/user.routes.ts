import { Router } from "express";
import controller from "../controllers/user.controller";
import { requestLogger } from "../middleware/requestLogger";

const router = Router();

// Create
router.post("/", requestLogger, controller.createUserHandler);

// Read all
router.get("/", requestLogger, controller.getUsersHandler);

// Read one
router.get("/:id", requestLogger, controller.getUserHandler);

// Update
router.put("/:id", requestLogger, controller.updateUserHandler);

// Delete
router.delete("/:id", requestLogger, controller.deleteUserHandler);

export default router;
