import prisma from "./prisma.js";

export const isUserExist = async (email, userName) => {
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email: email }, { userName: userName }],
    },
  });

  if (existingUser) {
    throw new Error("Email or username already taken.");
  }

  return existingUser;
};
