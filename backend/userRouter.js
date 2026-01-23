import express from "express";
import jwt from "jsonwebtoken";
const router = express.Router();
import User from "./db.js";
import authenticate from "./auth.js";
import zod from "zod";

const JWT_SECRET = process.env.JWT_SECRET || "Se5ret";

const loginSchema = zod.object({
  username: zod.string().min(3),
  password: zod.string().min(1),
});
const signupSchema = zod.object({
  username: zod.string().min(3),
  password: zod.string().min(1),
  firstName: zod.string().min(1),
  lastName: zod.string().min(1),
});

router.post("/login", async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  const success = loginSchema.safeParse({ username, password });
  if (!success.success) {
    return res.status(400).send("wrong input Credentials");
  }

  const user = await User.findOne({ username: username, password: password });
  if (!user) {
    return res.status(400).send("Invalid Credentials");
  }
  if (user.password !== password) {
    return res.status(400).send("Invalid Credentials");
  }

  const token = jwt.sign({ username, password }, JWT_SECRET, { expiresIn: "1h" });

  res.json({ message: "Login successful", token });
});
router.post("/signup", async (req, res) => {
  const {username, password, firstName, lastName} = req.body;

  const sucess = signupSchema.safeParse({ username, password, firstName, lastName });
  if (!sucess.success) {
    return res.status(400).send("Invalid Credentials");
  }
  
  const token = jwt.sign({ username, password }, JWT_SECRET, { expiresIn: "1h" });

  const user = await User.findOne({ username: username });
  if (user) {
    return res.status(400).send("User already exists");
  }

  const newUser = await User.create({
    username: username,
    firstName: firstName,
    lastName: lastName, 
    password: password,
    balance: 10000,
  });

  
  res.json({ token, message: "User created successfully", user: newUser });
});

router.get("/profile", authenticate, async (req, res) => {
  const username = req.query.username;
  const user = await User.findOne({ username: username });
  if (!user) {
    return res.status(400).send("User not found");
  }
  res.json({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    balance: user.balance,
  });
});

router.get("/like", async (req, res) => {
  const string = req.query.string;
  const usersList = await User.find({
    $or: [
      { firstName: { $regex: `^${string}`, $options: "i" } },
      { lastName: { $regex: `^${string}`, $options: "i" } },
    ],
  });

  res.json({ usersList });
});

export const userRoutes = router;
