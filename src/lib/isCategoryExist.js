import prisma from "./prisma.js";

export const isCategoryExist = async (slug) => {
  const existingCategory = await prisma.category.findUnique({
    where: {
      slug: slug,
    },
  });

  if (existingCategory) {
    throw new Error("Slug already taken.");
  }

  return existingCategory;
};
