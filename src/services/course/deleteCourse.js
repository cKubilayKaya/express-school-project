import prisma from "../../lib/prisma.js";

export const deleteCourse = async (id) => {
  return await prisma.course.delete({
    where: {
      id: id,
    },
  });
};
