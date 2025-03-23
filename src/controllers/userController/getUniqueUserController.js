import { getUniqueUser } from "../../services/auth/getUniqueUser.js";

export const getUniqueUserController = async (req, res) => {
  const { idOrUserName } = req.params;

  try {
    const user = await getUniqueUser(idOrUserName);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
