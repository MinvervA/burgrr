const jwt = require("jsonwebtoken");

module.exports = {
  createJWT: (payload, expiry) => {
    try {
      return jwt.sign(payload, "abc123", {
        expiresIn: expiry,
      });
    } catch (error) {
      return error;
    }
  },
  verify: (req, res, next) => {
    try {
      const { token } = req.params;
      const decodeToken = JWT.verify(token, "abc123");
      req.dataToken = decodeToken;
    } catch (error) {
      res.status(500).send({
        isError: true,
        message: "token is error",
      });
    }
  },
};
