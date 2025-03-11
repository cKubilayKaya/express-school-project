import prisma from "../../lib/prisma.js";

export const getCourses = async (page, limit) => {
  const skip = (page - 1) * limit;

  return await prisma.course.findMany({
    skip,
    take: parseInt(limit),
    include: {
      teachers: true,
      students: true,
    },
  });
};
