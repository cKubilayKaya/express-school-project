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
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: { teachers: true },
    });

    if (!course) {
      throw { status: 404, message: "Course not found." };
    }

    if (course.createdById !== user.userId) {
      throw { status: 403, message: "You can only remove teachers from courses you created." };
    }

    return await prisma.course.update({
      where: { id: courseId },
      data: {
        teachers: {
          disconnect: teachersId.map((id) => ({ id })),
        },
      },
    });
  }

  throw { status: 403, message: "Students cannot remove teachers from courses." };
};
