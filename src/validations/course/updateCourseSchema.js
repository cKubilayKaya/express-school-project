import Joi from "joi";
import {
  bannerImageSchema,
  categoryIdSchema,
  courseDescriptionSchema,
  courseNameSchema,
  endDateSchema,
  isActiveSchema,
  levelSchema,
  slugSchema,
  startDateSchema,
} from "../validations.js";

export const updateCourseSchema = Joi.object({
  slug: slugSchema().optional(),
  name: courseNameSchema().optional(),
  description: courseDescriptionSchema().optional(),
  bannerImage: bannerImageSchema().optional(),
  categoryId: categoryIdSchema().optional(),
  startDate: startDateSchema().optional(),
  endDate: endDateSchema().optional(),
  level: levelSchema().optional(),
  isActive: isActiveSchema().optional(),
});
