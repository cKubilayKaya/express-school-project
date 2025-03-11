import express from "express";

import { getUsersController } from "../controllers/userController/getUsersController.js";
import { getUniqueUserController } from "../controllers/userController/getUniqueUserController.js";
import { registerController } from "../controllers/userController/registerController.js";
import { updateUserContoller } from "../controllers/userController/updateUserContoller.js";
import { deleteUserContoller } from "../controllers/userController/deleteUserContoller.js";
import { validationMiddleware } from "../middlewares/validationMiddleware.js";
import { registerSchema } from "../validations/auth/registerSchema.js";
import { loginSchema } from "../validations/auth/loginSchema.js";
import { loginController } from "../controllers/userController/loginController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, getUsersController);
router.get("/:id", getUniqueUserController);
router.post("/register", validationMiddleware(registerSchema), registerController);
router.post("/login", validationMiddleware(loginSchema), loginController);
router.put("/:id", updateUserContoller);
router.delete("/:id", deleteUserContoller);

export default router;
