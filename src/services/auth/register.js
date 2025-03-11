import bcrypt from "bcryptjs"; // bcrypt'i import ediyoruz
import { isUserExist } from "../../lib/isUserExist.js";
import prisma from "../../lib/prisma.js";

export const register = async (data) => {
  const { email, userName } = data;

  await isUserExist(email, userName);

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(data.password, salt);

  data.password = hashedPassword;

  return await prisma.user.create({
    data: data,
  });
};
