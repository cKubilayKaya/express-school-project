import Joi from "joi";

export const userNameSchema = () =>
  Joi.string().min(3).max(30).required().messages({
    "string.base": "Username must be a string",
    "string.min": "Username must be at least 3 characters long",
    "string.max": "Username must be less than 30 characters",
    "any.required": "Username is required",
  });

export const passwordSchema = () =>
  Joi.string().min(6).required().messages({
    "string.base": "Password must be a string",
    "string.min": "Password must be at least 6 characters long",
    "any.required": "Password is required",
  });

export const fullNameValidation = () =>
  Joi.string().min(3).max(50).messages({
    "string.base": "Full name must be a string",
    "string.min": "Full name must be at least 3 characters long",
    "string.max": "Full name must be less than 50 characters",
    "any.required": "Full name is required",
  });

export const emailValidation = () =>
  Joi.string().email().required().messages({
    "string.base": "Email must be a string",
    "string.email": "Please provide a valid email address",
    "any.required": "Email is required",
  });

export const phoneNumberValidation = () =>
  Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .optional()
    .messages({
      "string.pattern.base": "Phone number must be a valid number with 10-15 digits",
    });

export const bioSchema = () =>
  Joi.string().max(300).optional().messages({
    "string.base": "Bio must be a string",
    "string.max": "Bio must be less than 300 characters",
  });

export const addressSchema = () =>
  Joi.string().optional().messages({
    "string.base": "Address must be a string",
  });
export const profileImageSchema = () =>
  Joi.string().uri().allow("").optional().messages({
    "string.uri": "Profile image must be a valid URL",
  });

export const roleSchema = () =>
  Joi.string().valid("student", "teacher").required().messages({
    "string.base": "Role must be a string",
    "any.required": "Role is required",
    "any.only": "Role must be either 'student' or 'teacher'",
  });

export const slugSchema = (isRequired = true) => {
  let schema = Joi.string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/) // slugs will be lowercase and can contain hyphens
    .min(3)
    .max(200)
    .messages({
      "string.base": "Slug must be a string",
      "string.pattern.base": "Slug must contain only lowercase letters, numbers, and hyphens",
      "string.min": "Slug must be at least 3 characters long",
      "string.max": "Slug must be less than 200 characters",
    });

  if (isRequired) {
    schema = schema.required().messages({ "any.required": "Slug is required" });
  }

  return schema;
};

export const categoryNameSchema = () =>
  Joi.string().min(3).max(200).messages({
    "string.base": "Category name must be a string",
    "string.min": "Category name must be at least 3 characters long",
    "string.max": "Category name must be less than 50 characters",
    "any.required": "Category name is required",
  });

export const categoryDescriptionSchema = () =>
  Joi.string().max(500).optional().messages({
    "string.base": "Description must be a string",
    "string.max": "Description must be less than 500 characters",
  });

export const bannerImageSchema = () =>
  Joi.string().uri().allow("").optional().messages({
    "string.uri": "Banner image must be a valid URL",
  });

export const courseNameSchema = () =>
  Joi.string().min(3).max(200).messages({
    "string.base": "Category name must be a string",
    "string.min": "Category name must be at least 3 characters long",
    "string.max": "Category name must be less than 50 characters",
  });

export const courseDescriptionSchema = () =>
  Joi.string().optional().messages({
    "string.base": "Description must be a string",
  });

export const categoryIdSchema = () =>
  Joi.string().required().messages({
    "string.base": "Category ID must be a string",
    "any.required": "Category ID is required",
  });

export const startDateSchema = () =>
  Joi.date().iso().required().messages({
    "date.base": "Start date must be a valid date",
    "date.format": "Start date must be in ISO format (YYYY-MM-DD)",
    "any.required": "Start date is required",
  });

export const endDateSchema = () =>
  Joi.date()
    .iso()
    .greater(Joi.ref("startDate")) // Bitiş tarihi, başlangıç tarihinden büyük olmalı
    .required()
    .messages({
      "date.base": "End date must be a valid date",
      "date.format": "End date must be in ISO format (YYYY-MM-DD)",
      "date.greater": "End date must be after the start date",
      "any.required": "End date is required",
    });

export const levelSchema = () =>
  Joi.string()
    .valid("beginner", "intermediate", "advanced") // Sadece belirli seviyeler kabul edilir
    .required()
    .messages({
      "any.only": "Level must be one of 'beginner', 'intermediate', or 'advanced'",
      "any.required": "Level is required",
    });

export const isActive = () =>
  Joi.boolean().default(true).messages({
    "boolean.base": "isActive must be a boolean",
  });
