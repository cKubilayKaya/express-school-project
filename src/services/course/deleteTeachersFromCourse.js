import prisma from "../../lib/prisma.js";

export const deleteTeachersFromCourse = async (user, courseId, teachersId) => {
  if (user.role === "super_admin") {
    return await prisma.course.update({
      where: { id: courseId },
      data: {
        teachers: {
          disconnect: teachersId.map((id) => ({ id })),
        },
      },
    });
  }

  if (user.role === "teacher") {
    return await prisma.course.update({
      where: { id: courseId },
      data: {
        teachers: {
          disconnect: teachersId.map((id) => ({ id })),
        },
      },
    });
  }

  throw { status: 403, message: "You do not have permission to modify this data." };
};
