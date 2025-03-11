import { deleteCategory } from "../../services/category/deleteCategory.js";

export const deleteCategoryController = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteCategory(id);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
