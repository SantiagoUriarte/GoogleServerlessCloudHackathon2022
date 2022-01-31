const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async (req, res) => {
  // LETS VALIDATE THE DATA BEFORE WE ADD USER
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if the email is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  // Check if phone number is already in the database
  const phoneExist = await User.findOne({ phoneNumber: req.body.phoneNumber });
  if (phoneExist) return res.status(400).send("Phone number already exists");

  // Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new user
  const user = new User({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: savedUser._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  // LETS VALIDATE THE DATA BEFORE WE ADD USER
  const { error } = loginValidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  if (error) return res.status(400).send("Invalid email or phone number");jm
  // Check if email doesn't exist
  const email = await User.findOne({ email: req.body.login });
  const phone = await User.findOne({ phoneNumber: req.body.login });
  if (!email && !phone)
    return res.status(400).send("Email or phone number is not found");

  let user = email;
  if (!email) {
    user = phone;
  }

  // Check if phone number exists
  // const userPhone = await User.findOne({phone: req.body.phone});
  // if (!userPhone) return res.status(400).send("Phone number is not found");

  // Check if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  //Create and assign a token
  // const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  // res.header("auth-token", token).send(token);

  res.send("Logged In!");
});

module.exports = router;
