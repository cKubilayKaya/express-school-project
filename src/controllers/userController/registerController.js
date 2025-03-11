import { register } from "../../services/auth/register.js";

export const registerController = async (req, res) => {
  const data = req.body;

  try {
    const user = await register(data);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
