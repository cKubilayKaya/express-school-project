import prisma from "../../lib/prisma.js";

export const assignTeachers = async (courseId, teacherIds, user) => {
  if (!Array.isArray(teacherIds) || teacherIds.length === 0) {
    throw {
      status: 400,
      message: "Teacher IDs must be provided as a non-empty array.",
    };
  }

  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: { teachers: true, createdBy: true },
  });

  if (!course) {
    throw {
      status: 404,
      message: "Course not found.",
    };
  }

  if (user.role === "super_admin") {
    return await prisma.course.update({
      where: { id: courseId },
      data: {
        teachers: {
          connect: teacherIds.map((id) => ({ id })),
        },
      },
      include: { teachers: true },
    });
  }

  if (user.role === "teacher") {
    if (course.createdById !== user.userId) {
      throw {
        status: 403,
        message: "Teachers can only assign teachers to courses they created.",
      };
    }

    return await prisma.course.update({
      where: { id: courseId },
      data: {
        teachers: {
          connect: teacherIds.map((id) => ({ id })),
        },
      },
      include: { teachers: true },
    });
  }

  throw {
    status: 403,
    message: "You do not have permission to assign teachers to this course.",
  };
};
