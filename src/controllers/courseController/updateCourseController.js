import { updateCourse } from "../../services/course/updateCourse.js";

export const updateCourseController = async (req, res) => {
  const { courseId } = req.params;
  const data = req.body;
  const user = req.user;

  try {
    const course = await updateCourse(courseId, data, user);
    res.status(200).json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
