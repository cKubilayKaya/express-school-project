import Joi from "joi";

export const registerSchema = Joi.object({
  fullName: Joi.string().min(3).max(50).messages({
    "string.base": "Full name must be a string",
    "string.min": "Full name must be at least 3 characters long",
    "string.max": "Full name must be less than 50 characters",
  }),

  userName: Joi.string().min(3).max(30).required().messages({
    "string.base": "Username must be a string",
    "string.min": "Username must be at least 3 characters long",
    "string.max": "Username must be less than 30 characters",
    "any.required": "Username is required",
  }),

  email: Joi.string().email().required().messages({
    "string.base": "Email must be a string",
    "string.email": "Please provide a valid email address",
    "any.required": "Email is required",
  }),

  password: Joi.string().min(6).required().messages({
    "string.base": "Password must be a string",
    "string.min": "Password must be at least 6 characters long",
    "any.required": "Password is required",
  }),
});
