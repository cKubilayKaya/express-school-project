import { updateUser } from "../../services/auth/updateUser.js";

export const updateUserContoller = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const user = req.user;

  try {
    await updateUser(id, data, user);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
