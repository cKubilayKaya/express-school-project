import { updateUser } from "../../services/auth/updateUser.js";

export const updateUserContoller = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const userId = req.user.id;

  if (userId !== id) {
    return res.status(403).json({ success: false, message: "Yetkisiz işlem." });
  }

  try {
    await updateUser(id, data);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
