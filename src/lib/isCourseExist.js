import prisma from "./prisma.js";

export const isCourseExist = async (slug) => {
  const existingCourse = await prisma.course.findUnique({
    where: {
      slug: slug,
    },
  });

  if (existingCourse) {
    throw new Error("Slug already taken.");
  }

  return existingCourse;
};
