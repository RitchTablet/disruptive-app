import PermisionsService from "../services/permissions.service.js";

export const getPermisions = async (req, res) => {
  const permisionService = new PermisionsService();
  const permisions = await permisionService.findAllPermisions();
  return res.json(permisions);
};
