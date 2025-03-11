import prisma from "../../lib/prisma.js";

export const updateCourse = async (id, data) => {
  const updatedData = Object.keys(data).reduce((acc, key) => {
    if (data[key] !== undefined && data[key] !== null) {
      acc[key] = data[key];
    }
    return acc;
  }, {});

  return await prisma.course.update({
    where: {
      id: id,
    },
    data: updatedData,
  });
};
