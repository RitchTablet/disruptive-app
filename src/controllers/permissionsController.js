import PermissionsService from "../services/permissions.service.js";

export const getPermissions = async (req, res) => {
  try {
    const permissionsService = new PermissionsService();
    const permissions = await permissionsService.findAllPermissions();
    return res.json(permissions);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener los permisos" });
  }
};

export const createPermission = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res
        .status(400)
        .json({
          message: "El nombre y la descripción del permiso son obligatorios",
        });
    }

    const permissionsService = new PermissionsService();
    const newPermission = await permissionsService.createPermission({
      name,
      description,
    });

    return res.json(newPermission);
  } catch (error) {
    return res.status(500).json({ message: "Error al crear el permiso" });
  }
};

export const updatePermission = async (req, res) => {
  try {
    const permissionId = req.params.id;
    const { name, description } = req.body;

    if (!name || !description) {
      return res
        .status(400)
        .json({
          message: "El nombre y la descripción del permiso son obligatorios",
        });
    }

    const permissionsService = new PermissionsService();
    const updatedPermission = await permissionsService.updatePermission(
      permissionId,
      { name, description },
    );

    return res.json(updatedPermission);
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar el permiso" });
  }
};

export const deletePermission = async (req, res) => {
  try {
    const permissionId = req.params.id;

    const permissionsService = new PermissionsService();
    await permissionsService.deletePermission(permissionId);

    return res.json({ message: "Permiso eliminado exitosamente" });
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar el permiso" });
  }
};
