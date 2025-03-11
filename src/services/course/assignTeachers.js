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

  // Öğretmen rolü kontrolü
  if (user.role === "teacher") {
    // Kurs oluşturucusu kontrolü
    if (course.createdById !== user.userId) {
      throw {
        status: 403,
        message: "Teachers can only assign teachers to courses they created.",
      };
    }
  }
  // Admin değilse ve öğretmen değilse (veya öğretmen olup kursu oluşturmamışsa) izin vermiyoruz
  else if (user.role !== "super_admin") {
    throw {
      status: 403,
      message: "You do not have permission to assign teachers to this course.",
    };
  }

  // Öğretmenleri kontrol et
  const teachers = await prisma.user.findMany({
    where: {
      id: { in: teacherIds },
      role: "teacher",
    },
  });

  if (teachers.length !== teacherIds.length) {
    throw {
      status: 404,
      message: "One or more teachers not found.",
    };
  }

  // Kursa öğretmenleri ekle
  const updatedCourse = await prisma.course.update({
    where: { id: courseId },
    data: {
      teachers: {
        connect: teacherIds.map((id) => ({ id })),
      },
    },
  });

  return updatedCourse;
};
