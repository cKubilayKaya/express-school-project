import { updateCourse } from "../../services/course/updateCourse.js";

export const updateCourseController = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const course = await updateCourse(id, data);
    res.status(200).json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
