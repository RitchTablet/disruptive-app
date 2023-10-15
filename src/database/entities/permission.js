import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Permission",
  tableName: "permissions",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
  },
  relations: {
    roles: {
      target: "RolePermission",
      type: "one-to-many",
      inverseSide: "permission",
    },
  },
});
