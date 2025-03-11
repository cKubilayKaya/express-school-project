import prisma from "../../lib/prisma.js";

export const assignStudents = async (courseId, studentsId, user) => {
  if (!Array.isArray(studentsId) || studentsId.length === 0) {
    throw {
      status: 400,
      message: "Student IDs must be provided as a non-empty array.",
    };
  }

  // Eğer kullanıcı student ise, sadece kendisini ekleyebilmesi gerekir
  if (user.role === "student") {
    const isTryingToAddOthers = studentsId.some((id) => id !== user.userId);
    if (isTryingToAddOthers) {
      throw {
        status: 403,
        message: "Students can only enroll themselves in a course.",
      };
    }
  }

  // Kursu bul
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: { students: true },
  });

  if (!course) {
    throw {
      status: 404,
      message: "Course not found.",
    };
  }

  // Öğrencilerin mevcut olup olmadığını kontrol et
  const students = await prisma.user.findMany({
    where: {
      id: { in: studentsId },
      role: "student",
    },
  });

  if (students.length !== studentsId.length) {
    throw {
      status: 404,
      message: "One or more students not found.",
    };
  }

  // Öğrencilerin daha önce kursa atanıp atanmadığını kontrol et
  for (let student of students) {
    const alreadyAssigned = course.students.some((courseStudent) => courseStudent.id === student.id);
    if (alreadyAssigned) {
      throw {
        status: 403,
        message: `Student ${student.userName} is already assigned to this course.`,
      };
    }
  }

  // Kursa öğrencileri ekle
  const updatedCourse = await prisma.course.update({
    where: { id: courseId },
    data: {
      students: {
        connect: studentsId.map((id) => ({ id })),
      },
    },
  });

  return updatedCourse;
};
