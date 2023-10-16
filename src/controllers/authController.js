import validator from "validator";
import UserService from "../services/user.service.js";
import JwtService from "../services/jwt.service.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (
    email == null ||
    password == null ||
    !validator.isEmail(email) ||
    validator.isEmpty(password)
  )
    return res.sendStatus(400);

  const userService = new UserService();
  const user = await userService.findOneByLogin(email, password);

  if (!user) return res.sendStatus(400);

  const jwtService = new JwtService();
  const access_token = jwtService.sign(user);

  return res.status(201).json({ access_token });
};
