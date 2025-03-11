import { deleteCourse } from "../../services/course/deleteCourse.js";

export const deleteCourseController = async (req, res) => {
  const { courseId } = req.params;

  try {
    await deleteCourse(courseId);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
