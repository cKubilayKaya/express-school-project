import Joi from "joi";
import { bannerImageSchema, categoryDescriptionSchema, categoryNameSchema, slugSchema } from "../validations.js";

export const updateCategorySchema = Joi.object({
  slug: slugSchema(false),
  name: categoryNameSchema(),
  description: categoryDescriptionSchema(),
  bannerImage: bannerImageSchema(),
});
