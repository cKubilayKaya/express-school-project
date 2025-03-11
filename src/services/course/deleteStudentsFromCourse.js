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

  if (user.role === "student") {
    return await prisma.course.update({
      where: { id: courseId },
      data: {
        students: {
          disconnect: studentsId.map((id) => ({ id })),
        },
      },
    });
  }

  throw { status: 403, message: "You do not have permission to modify this data." };
};
