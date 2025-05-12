const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecret = process.env.SECRET_KEY; // Ensure the variable name matches your .env file

const isAuthenticated = (req, res, next) => {
  try {
    // Extract token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization token missing or malformed" });
    }

    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded; // Attach user data to request
     console.log(decoded);
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("JWT verification error:", error.message);
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = isAuthenticated;
