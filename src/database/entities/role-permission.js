import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "RolePermission",
  tableName: "role_permissions",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    roleId: {
      type: "int",
    },
    permissionId: {
      type: "int",
    },
  },
  relations: {
    role: {
      target: "Role",
      type: "many-to-one",
      inverseSide: "permissions",
    },
    permission: {
      target: "Permission",
      type: "many-to-one",
      inverseSide: "roles",
    },
  },
});
