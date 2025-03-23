import express from "express";
import { getUniqueUserController } from "../controllers/userController/getUniqueUserController.js";
import { registerController } from "../controllers/userController/registerController.js";
import { updateUserContoller } from "../controllers/userController/updateUserContoller.js";
import { validationMiddleware } from "../middlewares/validationMiddleware.js";
import { registerSchema } from "../validations/auth/registerSchema.js";
import { loginSchema } from "../validations/auth/loginSchema.js";
import { loginController } from "../controllers/userController/loginController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.get("/:idOrUserName", authenticateToken, getUniqueUserController);
router.post("/register", validationMiddleware(registerSchema), registerController);
router.post("/login", validationMiddleware(loginSchema), loginController);
router.put("/:id", authenticateToken, upload.single("profileImage"), updateUserContoller);

export default router;
