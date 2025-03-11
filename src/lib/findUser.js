import prisma from "./prisma.js";

export const findUser = async (email, userName) => {
  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email: email }, { userName: userName }],
    },
  });

  if (!user) {
    throw new Error("User doesn't exist.");
  }

  return user;
};
