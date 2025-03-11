import { deleteCourse } from "../../services/course/deleteCourse.js";

export const deleteCourseController = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteCourse(id);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
