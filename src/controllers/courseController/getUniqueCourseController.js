import { getUniqueCourse } from "../../services/course/getUniqueCourse.js";

export const getUniqueCourseController = async (req, res) => {
  const { courseIdOrSlug } = req.params;

  try {
    const uniqueCourse = await getUniqueCourse(courseIdOrSlug);
    res.status(200).json({ success: true, data: uniqueCourse });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
