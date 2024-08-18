import { Router } from "express";
import { User } from "@models";
import { generateToken } from "../utils/functions.js";
import bcrypt from "bcryptjs";

const auth = Router();

auth.post("/register", async (req, res) => {
  try {
    const { name, lastname, email, password, type } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new Error("Ya existe un usuario con ese correo");
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      lastname,
      email,
      password: hashedPassword,
      type,
      status: "normal",
    });

    const token = generateToken({
      id: newUser.id,
      type: newUser.type,
    });

    if (newUser) {
      console.log(`Usuario ${newUser.id} creado con éxito`);
      return res.status(201).json({ token });
    } else {
      return res.status(500);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

auth.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        message: "Credenciales inválidas",
        error: "Email and password don't match",
      });
    }

    const token = generateToken({ id: user.id, type: user.type });

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
});

export default auth;
