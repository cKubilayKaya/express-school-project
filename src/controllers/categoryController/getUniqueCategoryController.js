import { getUniqueCategory } from "../../services/category/getUniqueCategory.js";

export const getUniqueCategoryController = async (req, res) => {
  const { id } = req.params;

  try {
    const uniqueCategory = await getUniqueCategory(id);
    res.status(200).json({ success: true, data: uniqueCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
