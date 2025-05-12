const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
const isAuthenticated = require("../middleware/isAuthenticated");
const cors = require("cors");

// Apply CORS globally (if needed)
router.use(cors());

router
  .post("/register", authController.register)
  .post("/send-otp", authController.sendOtp)
  .post("/verify-otp", authController.verifyOtp)
  .post("/login", authController.login)
  .post("/logout", authController.logout)
  .get("/check",authController.checkRegister)
  .get("/protected-route", isAuthenticated, (req, res) => { // ✅ Fixed middleware usage
    console.log("In get",req.user);
    res.json({ message: "Access granted", user: req.user });
  });


module.exports = router;
