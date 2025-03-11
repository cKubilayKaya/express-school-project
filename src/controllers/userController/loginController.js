import { login } from "../../services/auth/login.js";

export const loginController = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const { user, token } = await login({ userName: userName, password: password });
    res.status(201).json({ success: true, data: user, token: token });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
