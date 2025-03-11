export const authorizeRole = (roles = []) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized: You do not have permission to perform this action.",
      });
    }

    next();
  };
};
