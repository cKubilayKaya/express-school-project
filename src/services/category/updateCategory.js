import prisma from "../../lib/prisma.js";

export const updateCategory = async (id, data) => {
  return await prisma.category.update({
    where: {
      id: id,
    },
    data: data,
  });
};
