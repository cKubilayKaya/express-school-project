import prisma from "../../lib/prisma.js";

export const updateUser = async (id, data) => {
  return await prisma.user.update({
    where: {
      id: id,
    },
    data: data,
  });
};
