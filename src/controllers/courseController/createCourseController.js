import { createCourse } from "../../services/course/createCourse.js";

export const createCourseController = async (req, res) => {
  const data = req.body;
  const userId = req?.user?.userId;

  try {
    const course = await createCourse(data, userId);
    res.status(200).json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
