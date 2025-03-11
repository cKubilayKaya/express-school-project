import prisma from "../lib/prisma.js";

export const authorizeTeacherCourseOwnership = async (req, res, next) => {
  const { userId, role } = req.user;
  const { courseId } = req.params;

  if (role === "super_admin") {
    return next();
  }

  if (role === "teacher") {
    // Öğretmen gerçekten bu kursun bir parçası mı?
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: { teachers: true },
    });

    if (!course) {
      return res.status(404).json({ message: "Course not found." });
    }

    // Eğer öğretmen bu kursta varsa işlem yapmasına izin ver.
    const isTeacherInCourse = course.teachers.some((teacher) => teacher.id === userId);
    if (isTeacherInCourse) {
      return next();
    }

    return res.status(403).json({ message: "You do not have permission to modify this data." });
  }

  return res.status(403).json({ message: "You do not have permission to modify this data." });
};
