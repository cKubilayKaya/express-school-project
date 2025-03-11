import express from "express";
import { authenticateToken } from "../middlewares/authMiddleware.js";
import { validationMiddleware } from "../middlewares/validationMiddleware.js";
import { authorizeRole } from "../middlewares/authorizeRole.js";
import { getCoursesController } from "../controllers/courseController/getCoursesController.js";
import { getUniqueCourseController } from "../controllers/courseController/getUniqueCourseController.js";
import { createCourseController } from "../controllers/courseController/createCourseController.js";
import { updateCourseController } from "../controllers/courseController/updateCourseController.js";
import { deleteCourseController } from "../controllers/courseController/deleteCourseController.js";
import { createCourseSchema } from "../validations/course/createCourseSchema.js";
import { updateCourseSchema } from "../validations/course/updateCourseSchema.js";

const router = express.Router();

router.get("/", authenticateToken, getCoursesController);
router.get("/:id", authenticateToken, getUniqueCourseController);
router.post("/", authenticateToken, authorizeRole(), validationMiddleware(createCourseSchema), createCourseController);
router.put("/:id", authenticateToken, authorizeRole(), validationMiddleware(updateCourseSchema), updateCourseController);
router.delete("/:id", authenticateToken, authorizeRole(), deleteCourseController);

export default router;
