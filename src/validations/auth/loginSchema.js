import Joi from "joi";
import { passwordSchema, userNameSchema } from "../validations.js";

export const loginSchema = Joi.object({
  userName: userNameSchema(),
  password: passwordSchema(),
});
