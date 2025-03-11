import Joi from "joi";
import {
  bannerImageSchema,
  categoryIdSchema,
  courseDescriptionSchema,
  courseNameSchema,
  createdByIdSchema,
  endDateSchema,
  isActiveSchema,
  levelSchema,
  slugSchema,
  startDateSchema,
} from "../validations.js";

export const createCourseSchema = Joi.object({
  slug: slugSchema(),
  name: courseNameSchema(),
  description: courseDescriptionSchema(),
  bannerImage: bannerImageSchema(),
  categoryId: categoryIdSchema(),
  startDate: startDateSchema(),
  endDate: endDateSchema(),
  level: levelSchema(),
  isActive: isActiveSchema(),
  createdById: createdByIdSchema(),
});
