import prisma from "../../lib/prisma.js";

export const getCategories = async () => {
  return await prisma.category.findMany();
};
