import Joi from "joi";
import { bannerImageSchema, categoryDescriptionSchema, categoryNameSchema, slugSchema } from "../validations.js";

export const createCategorySchema = Joi.object({
  slug: slugSchema(),
  name: categoryNameSchema(),
  description: categoryDescriptionSchema(),
  bannerImage: bannerImageSchema(),
});
