import Joi from "joi";
import { assignIdStudentsSchema } from "../validations.js";

export const assignStudentsSchema = Joi.object({
  studentsId: assignIdStudentsSchema(),
});
