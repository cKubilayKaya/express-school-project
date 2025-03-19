import { getUniqueCategory } from "../../services/category/getUniqueCategory.js";

export const getUniqueCategoryController = async (req, res) => {
  const { id } = req.params;
  const { page = 1, limit = 1 } = req.query;

  try {
    const uniqueCategory = await getUniqueCategory(id, page, limit);
    res.status(200).json({ success: true, data: uniqueCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
