import jwt from "jsonwebtoken";

export const authenticateToken = async (req, res, next) => {
  const token = req?.header("Authorization")?.includes(" ") ? req?.header("Authorization")?.split(" ")[1] : req?.header("Authorization");
  if (!token) {
    return res.status(401).json({ success: false, message: "Token is missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};
