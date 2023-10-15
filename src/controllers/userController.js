import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { dataSource } from "../database/typeorm.config.js";

export const getAllUsers = async (req, res) => {
  const userRepository = dataSource.getRepository('User');
  const users = await userRepository.find({});
  res.json(users);
};

export const createUser = async (req, res) => {
  const user = req.body;
  const { password } = user;
  const userRepository = dataSource.getRepository('User');
  const secret = process.env.JWT;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const access_token = jwt.sign(user, secret, {
    expiresIn: 86400,
  });

  user.password = hashedPassword;
  const usersaved = await userRepository.save(user);
  delete usersaved.password;
  const response = { access_token, user: usersaved };
  res.status(201).json(response);
};
