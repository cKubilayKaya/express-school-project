import prisma from "../../lib/prisma.js";

export const getUniqueCourse = async (courseId) => {
  return await prisma.course.findUnique({
    where: {
      id: courseId,
    },
  });
};
