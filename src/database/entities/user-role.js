import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "UserRole",
  tableName: "user_roles",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    userId: {
      type: "int",
    },
    roleId: {
      type: "int",
    },
  },
  relations: {
    user: {
      target: "User",
      type: "many-to-one",
      inverseSide: "roles",
    },
    role: {
      target: "Role",
      type: "many-to-one",
      inverseSide: "users",
    },
  },
});
