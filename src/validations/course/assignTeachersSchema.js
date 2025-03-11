import Joi from "joi";
import { assignIdTeachersSchema } from "../validations.js";

export const assignTeachersSchema = Joi.object({
  teacherIds: assignIdTeachersSchema(),
});
