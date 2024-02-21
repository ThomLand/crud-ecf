const jwt = require("jsonwebtoken");

const routeProteger = (...role) => {
  return async (req, res, next) => {
    if (!role.includes(req.user.role)) {
      return res.status(403).json("acces bloque");
    } else {
      next();
    }
  };
};
module.exports={routeProteger}