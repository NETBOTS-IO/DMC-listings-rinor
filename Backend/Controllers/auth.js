import User from "../Models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from 'cookie';

export const register = async (req, res, next) => {
  try {
    console.log("im regestering u")
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });
    // console.log("data", newUser)

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });


    if (!user) {
      return res.status(404).send({ success: false, message: "Username or password is incorrect" })
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(404).send({ success: false, message: "Username or password is incorrect" })
    }
    // console.log("before token")
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET_KEY
    );
    // console.log("token", token)
    // console.log("after token")

    const { password, ...otherDetails } = user._doc;
    res.setHeader('Set-Cookie', cookie.serialize('access_token', token, {
      httpOnly: true,
      path: '/'
    }));
    // localStorage.setItem('access_token', token);
    // res.cookie("access_token", token, {
    //   httpOnly: true,
    //   // secure: false, // Allow insecure cookies
    // });
    // res.setHeader("Access-Control-Allow-Origin", "*")
    // res.setHeader("Access-Control-Allow-Credentials", "true");
    // res.setHeader("Access-Control-Max-Age", "1800");
    // res.setHeader("Access-Control-Allow-Headers", "content-type");
    // res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
    res.status(200).send({ details: { ...otherDetails }, token: token });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message })
  }
};



