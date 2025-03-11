import prisma from "./prisma.js";

export const findUserByUserName = async (userName) => {
  const user = await prisma.user.findUnique({
    where: {
      userName: userName,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};
