import { createUser } from "../../services/userService.js";

export const createUserController = async (req, res) => {
  const data = req.body;
  try {
    const user = await createUser(data);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
