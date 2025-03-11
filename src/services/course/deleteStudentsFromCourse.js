import prisma from "../../lib/prisma.js";

export const deleteStudentsFromCourse = async (user, courseId, studentsId) => {
  if (user.role === "super_admin") {
    return await prisma.course.update({
      where: { id: courseId },
      data: {
        students: {
          disconnect: studentsId.map((id) => ({ id })),
        },
      },
    });
  }

  if (user.role === "teacher") {
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: { students: true },
    });

    if (!course) {
      throw { status: 404, message: "Course not found." };
    }

    if (course.createdById === user.userId) {
      return await prisma.course.update({
        where: { id: courseId },
        data: {
          students: {
            disconnect: studentsId.map((id) => ({ id })),
          },
        },
      });
    } else {
      throw { status: 403, message: "You can only remove students from courses you created." };
    }
  }

  throw { status: 403, message: "Students cannot remove other students from courses." };
};
