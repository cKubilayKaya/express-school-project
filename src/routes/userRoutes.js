import express from "express";

import { getUsersController } from "../controllers/userController/getUsersController.js";
import { getUniqueUserController } from "../controllers/userController/getUniqueUserController.js";
import { createUserController } from "../controllers/userController/createUserController.js";
import { updateUserContoller } from "../controllers/userController/updateUserContoller.js";
import { deleteUserContoller } from "../controllers/userController/deleteUserContoller.js";

const router = express.Router();

router.get("/", getUsersController);
router.get("/:id", getUniqueUserController);
router.post("/", createUserController);
router.put("/:id", updateUserContoller);
router.delete("/:id", deleteUserContoller);

export default router;
