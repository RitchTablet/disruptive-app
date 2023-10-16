import JwtService from "../services/jwt.service.js";
import UserService from "../services/user.service.js";

export const getAllUsers = async (req, res) => {
  try {
    const userService = new UserService();
    const users = await userService.find();
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = req.body;
    const jwtService = new JwtService();
    const userService = new UserService();

    const userSaved = await userService.create(user);
    const access_token = jwtService.sign(userSaved);

    const response = { access_token, user: userSaved };
    res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ message: "Error al crear el usuario" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body;

    const userService = new UserService();
    const updatedUser = await userService.update(userId, userData);

    res.json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar el usuario" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const userService = new UserService();
    await userService.delete(userId);

    return res.json({ message: "Usuario eliminado exitosamente" });
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar el usuario" });
  }
};
