import { deleteStudentsFromCourse } from "../../services/course/deleteStudentsFromCourse.js";

export const deleteStudentsFromCourseController = async (req, res) => {
  const { courseId } = req.params;
  const { studentsId } = req.body; // studentIds dizisi body'den alınır
  const user = req.user;

  try {
    await deleteStudentsFromCourse(user, courseId, studentsId);
    res.status(200).json({ success: true, message: "Students removed from the course successfully." });
  } catch (error) {
    res.status(error.status || 500).json({ success: false, message: error.message });
  }
};
