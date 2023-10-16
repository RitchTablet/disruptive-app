import RoleService from "../services/role.service.js";

export const getRoles = async (req, res) => {
  try {
    const roleService = new RoleService();
    const roles = await roleService.findAll();
    return res.json(roles);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener los roles" });
  }
};

export const createRole = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res
        .status(400)
        .json({
          message: "El nombre y la descripción del rol son obligatorios",
        });
    }

    const roleService = new RoleService();
    const newRole = await roleService.createRole({ name, description });

    return res.json(newRole);
  } catch (error) {
    return res.status(500).json({ message: "Error al crear el rol" });
  }
};

export const updateRole = async (req, res) => {
  try {
    const roleId = req.params.id;
    const { name, description } = req.body;

    if (!name || !description) {
      return res
        .status(400)
        .json({
          message: "El nombre y la descripción del rol son obligatorios",
        });
    }

    const roleService = new RoleService();
    const updatedRole = await roleService.updateRole(roleId, {
      name,
      description,
    });

    return res.json(updatedRole);
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar el rol" });
  }
};

export const deleteRole = async (req, res) => {
  try {
    const roleId = req.params.id;

    const roleService = new RoleService();
    await roleService.deleteRole(roleId);

    return res.json({ message: "Rol eliminado exitosamente" });
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar el rol" });
  }
};
