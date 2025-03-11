import { assignTeachers } from "../../services/course/assignTeachers.js";

export const assignTeachersController = async (req, res) => {
  const { courseId } = req.params;
  const { teacherIds } = req.body;
  const user = req.user;

  try {
    const updatedCourse = await assignTeachers(courseId, teacherIds, user);

    return res.status(200).json({
      success: true,
      data: updatedCourse,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      success: false,
      message: error.message || "An error occurred while assigning teachers.",
    });
  }
};
