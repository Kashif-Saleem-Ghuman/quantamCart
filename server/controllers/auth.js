import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/auth.js";

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
