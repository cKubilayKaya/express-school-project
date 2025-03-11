import prisma from "../../lib/prisma.js";

export const deleteUser = async (id) => {
  return await prisma.user.delete({
    where: {
      id: id,
    },
  });
};
