import prisma from "../../lib/prisma.js";

export const getUniqueUser = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
};
