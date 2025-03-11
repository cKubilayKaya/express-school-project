import prisma from "../../lib/prisma.js";

export const updateCourse = async (courseId, data, user) => {
  const course = await prisma.course.findUnique({
    where: { id: courseId },
  });

  if (!course) {
    throw {
      status: 404,
      message: "Course not found.",
    };
  }

  if (user.role === "student") {
    throw {
      status: 403,
      message: "Students cannot update courses.",
    };
  }

  const updatedData = Object.keys(data).reduce((acc, key) => {
    if (data[key] !== undefined && data[key] !== null) {
      acc[key] = data[key];
    }
    return acc;
  }, {});

  // Kursu güncelle
  return await prisma.course.update({
    where: {
      id: courseId,
    },
    data: updatedData,
  });
};
