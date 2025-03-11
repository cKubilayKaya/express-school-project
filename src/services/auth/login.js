import { findUserByUserName } from "../../lib/findUserByUserName.js";
import { validatePassword } from "../../lib/validatePassword.js";
import jwt from "jsonwebtoken";

export const login = async (data) => {
  const { userName, password } = data;
  const user = await findUserByUserName(userName);
  await validatePassword(password, user.password);
  const token = jwt.sign({ userId: user.id, email: user.email, userName: user?.userName }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
  return { user, token };
};
