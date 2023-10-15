import JwtService from "../services/jwt.service.js";
import UserService from "../services/user.service.js";

export const getAllUsers = async (req, res) => {
  const userService = new UserService();
  const users = await userService.find();
  res.json(users);
};

export const createUser = async (req, res) => {
  const user = req.body;
  const jwtService = new JwtService();
  const userService = new UserService();

  const userSaved = await userService.create(user);
  const access_token = jwtService.sign(userSaved);

  const response = { access_token, user: userSaved };
  res.status(201).json(response);
};
