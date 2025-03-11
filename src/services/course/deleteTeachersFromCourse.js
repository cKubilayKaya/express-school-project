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
    const rightUser = teachersId.every((id) => id === user?.userId);

    if (rightUser) {
      return await prisma.course.update({
        where: { id: courseId },
        data: {
          teachers: {
            disconnect: teachersId.map((id) => ({ id })),
          },
        },
      });
    } else {
      throw { status: 403, success: false, message: "You do not have permission to remove other teachers from this data." };
    }
  }

  throw { status: 403, message: "You do not have permission to modify this data." };
};
