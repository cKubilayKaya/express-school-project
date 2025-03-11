import prisma from "../../lib/prisma.js";

export const getCourses = async () => {
  return await prisma.course.findMany({
    include: {
      teachers: true,
      students: true,
    },
  });
};
