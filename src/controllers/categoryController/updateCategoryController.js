import { updateCategory } from "../../services/category/updateCategory.js";

export const updateCategoryController = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const category = await updateCategory(id, data);
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
