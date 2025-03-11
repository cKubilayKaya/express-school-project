import { getCourses } from "../../services/course/getCourses.js";

export const getCoursesController = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const courses = await getCourses(page, limit);
    res.status(200).json({ success: true, data: courses });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
