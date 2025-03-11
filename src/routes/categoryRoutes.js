import express from "express";
import { authenticateToken } from "../middlewares/authMiddleware.js";
import { getCategoriesController } from "../controllers/categoryController/getCategoriesController.js";
import { validationMiddleware } from "../middlewares/validationMiddleware.js";
import { createCategorySchema } from "../validations/category/createCategorySchema.js";
import { createCategoryController } from "../controllers/categoryController/createCategoryController.js";
import { updateCategoryController } from "../controllers/categoryController/updateCategoryController.js";
import { updateCategorySchema } from "../validations/category/updateCategorySchema.js";
import { getUniqueCategoryController } from "../controllers/categoryController/getUniqueCategoryController.js";
import { deleteCategoryController } from "../controllers/categoryController/deleteCategoryController.js";
import { authorizeRole } from "../middlewares/authorizeRole.js";

const router = express.Router();

router.get("/", authenticateToken, getCategoriesController);
router.get("/:id", authenticateToken, getUniqueCategoryController);
router.post("/", authenticateToken, authorizeRole(["super_admin"]), validationMiddleware(createCategorySchema), createCategoryController);
router.put("/:id", authenticateToken, authorizeRole(["super_admin"]), validationMiddleware(updateCategorySchema), updateCategoryController);
router.delete("/:id", authenticateToken, authorizeRole(["super_admin"]), deleteCategoryController);

export default router;
