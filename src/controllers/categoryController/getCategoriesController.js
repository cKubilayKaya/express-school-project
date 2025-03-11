import { getCategories } from "../../services/category/getCategories.js";

export const getCategoriesController = async (req, res) => {
  try {
    const categories = await getCategories();
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
