import { EntitySchema } from "typeorm";

const ContentTypePermissionSchema = new EntitySchema({
  name: "ContentTypePermission",
  tableName: "content_type_permissions",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
      unique: true,
    },
  },
});

export default ContentTypePermissionSchema;
