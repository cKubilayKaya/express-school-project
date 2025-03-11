import { findUser } from "../../lib/findUser.js";
import { createCategory } from "../../services/category/createCategory.js";

export const createCategoryController = async (req, res) => {
  const data = req.body;

  try {
    const category = await createCategory(data);
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
