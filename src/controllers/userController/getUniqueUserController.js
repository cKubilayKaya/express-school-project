import { getUniqueUser } from "../../services/auth/getUniqueUser.js";

export const getUniqueUserController = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await getUniqueUser(id);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
