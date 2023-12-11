import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/auth.js";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // validation
    if (!name) return res.status(400).send("Name is required.");
    if (!password || password.length < 6)
      return res
        .status(400)
        .send("Password is required and should be min 6 characters long.");
    // check if user already exists
    let isUserExist = await User.findOne({ email }).exec();
    if (isUserExist) return res.status(400).send("Email is taken.");

    // hash password
    const hashedPassword = await hashPassword(password);

    // register
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    // save user
    await user.save();
    console.log("user::::", user);

    // send response
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

export const login = async (req, res) => {
  try {
    // console.log(req.body);
    const { email, password } = req.body;
    // check if user exist with that email
    const user = await User.findOne({ email }).exec();
    if (!user) return res.status(400).send("No User Found");
    // check password
    const match = await comparePassword(password, user.password);
    // create signed token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    // return user and token to client, exclude hashed password
    user.password = undefined;
    // send token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      // secure: true, // only works on https
    });
    // send user as json response
    res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

export const logout = async (req, res) => {
  try {
    //clear cookie
    res.clearCookie("token");
    return res.json({ message: "Signout success" });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};
