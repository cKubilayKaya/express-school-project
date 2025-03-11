import prisma from "../../lib/prisma.js";

export const deleteCategory = async (id) => {
  return await prisma.category.delete({
    where: {
      id: id,
    },
  });
};
