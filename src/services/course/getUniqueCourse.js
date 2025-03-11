import prisma from "../../lib/prisma.js";

export const getUniqueCourse = async (id) => {
  return await prisma.course.findUnique({
    where: {
      id: id,
    },
  });
};
