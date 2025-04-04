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
import { assignTeachersController } from "../controllers/courseController/assignTeachersController.js";
import { assignStudentsController } from "../controllers/courseController/assignStudentsController.js";
import { assignTeachersSchema } from "../validations/course/assignTeachersSchema.js";
import { assignStudentsSchema } from "../validations/course/assignStudentsSchema.js";
import { deleteTeachersFromCourseController } from "../controllers/courseController/deleteTeachersFromCourseController.js";
import { deleteStudentsFromCourseController } from "../controllers/courseController/deleteStudentsFromCourseController.js";
import { authorizeTeacherCourseOwnership } from "../middlewares/authorizeTeacherCourseOwnership.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.get("/", authenticateToken, getCoursesController);
router.get("/:courseIdOrSlug", authenticateToken, getUniqueCourseController);
router.post(
  "/",
  authenticateToken,
  authorizeRole(["super_admin", "teacher"]),
  validationMiddleware(createCourseSchema),
  upload.single("bannerImage"),
  createCourseController
);
router.put(
  "/:courseId",
  authenticateToken,
  authorizeRole(["super_admin", "teacher"]),
  validationMiddleware(updateCourseSchema),
  authorizeTeacherCourseOwnership,
  updateCourseController
);
router.put(
  "/:courseId/teachers",
  authenticateToken,
  authorizeRole(["super_admin", "teacher"]),
  authorizeTeacherCourseOwnership,
  validationMiddleware(assignTeachersSchema),
  assignTeachersController
);
router.put(
  "/:courseId/students",
  authenticateToken,
  authorizeRole(["super_admin", "student"]),
  validationMiddleware(assignStudentsSchema),
  assignStudentsController
);
router.delete("/:courseId", authenticateToken, authorizeRole(["super_admin", "teacher"]), authorizeTeacherCourseOwnership, deleteCourseController);
router.delete(
  "/:courseId/teachers",
  authenticateToken,
  authorizeRole(["super_admin", "teacher"]),
  authorizeTeacherCourseOwnership,
  deleteTeachersFromCourseController
);
router.delete(
  "/:courseId/students",
  authenticateToken,
  authorizeRole(["super_admin", "teacher"]),
  authorizeTeacherCourseOwnership,
  deleteStudentsFromCourseController
);

export default router;
