import { getCourses } from "../../services/course/getCourses.js";

export const getCoursesController = async (req, res) => {
  try {
    const courses = await getCourses();
    res.status(200).json({ success: true, data: courses });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
