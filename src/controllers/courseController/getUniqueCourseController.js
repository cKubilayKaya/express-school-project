import { getUniqueCourse } from "../../services/course/getUniqueCourse.js";

export const getUniqueCourseController = async (req, res) => {
  const { id } = req.params;

  try {
    const uniqueCourse = await getUniqueCourse(id);
    res.status(200).json({ success: true, data: uniqueCourse });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
