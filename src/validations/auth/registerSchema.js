import Joi from "joi";
import {
  addressSchema,
  bioSchema,
  emailValidation,
  fullNameValidation,
  passwordSchema,
  phoneNumberValidation,
  profileImageSchema,
  roleSchema,
  userNameSchema,
} from "../validations.js";

export const registerSchema = Joi.object({
  fullName: fullNameValidation(),
  email: emailValidation(),
  userName: userNameSchema(),
  password: passwordSchema(),
  phoneNumber: phoneNumberValidation(),
  profileImage: profileImageSchema(),
  bio: bioSchema(),
  address: addressSchema(),
  role: roleSchema(),
});
