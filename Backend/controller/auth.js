const Auth = require("../model/auth");
const Otp = require("../model/otp");
const bcrypt = require("bcryptjs");
const { sendMail } = require("../utils/Emails");
const { generateToken } = require("../utils//GenerateToken");
const { generateOTP } = require("../utils/GenerateOtp");
const { sanitizeUser } = require("../utils/SanitizeUser");
const Booking = require('../model/bookings');

exports.register = async (req, res) => {
  try {
    const { email, password, firstName , lastName, rollNumber, role } = req.body;
    console.log(email+ " "+password+" "+firstName+" "+lastName+" "+rollNumber);
    const user = await Auth.findOne({ email });
    if (user) {
      console.log(user);
      return res.status(400).json({
      
        message: "User already exists",
      });
    }
    const user1 = await Auth.findOne({ rollNumber });
    if (user1) {
      console.log(user1);
      return res.status(400).json({
      
        message: "User with this rollNumber already exists",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new Auth({
      email,
      password: hashedPassword,
      rollNumber,
      firstName,
      lastName,
      rollNumber,
      role
    });
    await newUser.save();
    const secureInfo = sanitizeUser(newUser);
    const token = generateToken(secureInfo);
    const cookieOptions = {
      sameSite: process.env.PRODUCTION === "true" ? "None" : "Lax",
      maxAge: new Date(
        Date.now() +
          parseInt(process.env.COOKIE_EXPIRATION_DAYS) * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: process.env.PRODUCTION === "true",
    };

   

    return res.status(201).json({
      message: "User registered successfully",
      user: secureInfo,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.sendOtp = async (req, res) => {
  try {
    const existingUser = await Auth.findOne({
      email: req.body.email,
    });

    if (!existingUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    await Otp.deleteMany({
      email: existingUser.email,
    });

    const otp = generateOTP();
    const hashedOtp = await bcrypt.hash(otp, 10);

    const newOtp = new Otp({
      email: existingUser.email,
      otp: hashedOtp,
      expiresAt: new Date(Date.now() + 600000),
    });
   console.log(newOtp)
    await newOtp.save();
   
    await sendMail(
      existingUser.email,
      "OTP for verification",
      `Your OTP is ${otp}`
    );
    console.log("hello");

    return res.status(200).json({
      message: "OTP sent successfully"+otp,
    });
  } catch (error) {
    return res.status(500).json({ 
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const existingOtp = await Otp.findOne({
      email,
    });

    if (!existingOtp) {
      return res.status(404).json({
        message: "OTP not found",
      });
    }

    const isValid = await bcrypt.compare(otp, existingOtp.otp);

    if (!isValid) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    if (new Date() > existingOtp.expiresAt) {
      return res.status(400).json({
        message: "OTP expired",
      });
    }

    await Auth.updateOne( { email }, { isVerified: true } );

    return res.status(200).json({
      message: "OTP verified successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body)
    const user = await Auth.findOne({
      email,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
   
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const secureInfo = sanitizeUser(user);
    const token = generateToken(secureInfo);

    res.cookie("token", token, {
      sameSite: process.env.PRODUCTION === "true" ? "None" : "Lax",
      maxAge: new Date(
        Date.now() +
          parseInt(process.env.COOKIE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000)
      ),
      httpOnly: true,
      secure: process.env.PRODUCTION === "true" ? true : false,
    });
    console.log("Here");

    return res.status(200).json({
      message: "Login successful",
      user: secureInfo,
      token
    });
  } catch (error) {
    console.log("I am stuck in error ")
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

exports.logout = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({
    message: "Logout successful",
  });
};


exports.checkRegister =  async (req, res) => {
  try {
    const { eventId, email } = req.query;
    const booking = await Booking.findOne({ eventId, email });

    res.json({ isRegistered: !!booking }); // Returns true if found, false otherwise
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}