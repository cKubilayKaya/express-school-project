import { deleteUser } from "../../services/auth/deleteUser.js";

export const deleteUserContoller = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteUser(id);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
