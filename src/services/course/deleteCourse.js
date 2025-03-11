import prisma from "../../lib/prisma.js";

export const deleteCourse = async (user, courseId) => {
  if (user.role === "super_admin") {
    return await prisma.course.delete({
      where: {
        id: courseId,
      },
    });
  }

  if (user.role === "teacher") {
    const course = await prisma.course.findUnique({
      where: {
        id: courseId,
      },
    });

    if (!course) {
      throw {
        status: 404,
        message: "Course not found.",
      };
    }

    if (course.createdById === user.userId) {
      return await prisma.course.delete({
        where: {
          id: courseId,
        },
      });
    } else {
      throw {
        status: 403,
        message: "You can only delete the course you created.",
      };
    }
  }

  throw {
    status: 403,
    message: "Students cannot delete courses.",
  };
};
