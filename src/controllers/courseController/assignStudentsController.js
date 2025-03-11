import { assignStudents } from "../../services/course/assignStudents.js";

export const assignStudentsController = async (req, res) => {
  const { courseId } = req.params;
  const { studentsId } = req.body;
  const user = req?.user;

  try {
    const updatedCourse = await assignStudents(courseId, studentsId, user);
    return res.status(200).json({
      success: true,
      data: updatedCourse,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      success: false,
      message: error.message || "An error occurred while assigning students.",
    });
  }
};
