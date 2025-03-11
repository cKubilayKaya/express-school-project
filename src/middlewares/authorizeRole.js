export const authorizeRole = () => {
  return (req, res, next) => {
    if (!req.user || req.user.role !== "super_admin") {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: You do not have permission to perform this action.",
      });
    }
    next();
  };
};
