import prisma from "../../lib/prisma.js";

export const getUniqueCategory = async (id) => {
  return await prisma.category.findUnique({
    where: {
      id: id,
    },
  });
};
