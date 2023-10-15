import RoleService from "../services/role.service.js";

export const getRoles = async (req, res) => {
  const roleService = new RoleService();
  const roles = await roleService.findAll();
  return res.json(roles);
};
