import { deleteTeachersFromCourse } from "../../services/course/deleteTeachersFromCourse.js";

export const deleteTeachersFromCourseController = async (req, res) => {
  const { courseId } = req.params;
  const { teachersId } = req.body;
  const user = req.user;

  try {
    await deleteTeachersFromCourse(user, courseId, teachersId);
    res.status(200).json({ success: true, message: "Teachers removed from the course successfully." });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
