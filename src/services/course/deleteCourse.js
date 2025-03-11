import prisma from "../../lib/prisma.js";

export const deleteCourse = async (courseId) => {
  try {
    const deletedCourse = await prisma.course.delete({
      where: { id: courseId },
    });

    return deletedCourse;
  } catch (error) {
    throw new Error(error.message);
  }
};
