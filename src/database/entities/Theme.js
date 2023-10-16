import { EntitySchema } from "typeorm";

const ThemeSchema = new EntitySchema({
  name: "Theme",
  tableName: "themes",
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
  relations: {
    contentPermissions: {
      type: "many-to-many",
      target: "ContentTypePermission",
      joinTable: {
        name: "theme_content_type_permission",
        joinColumn: {
          name: "theme_id",
          referencedColumnName: "id",
        },
        inverseJoinColumn: {
          name: "content_type_permission_id",
          referencedColumnName: "id",
        },
      },
    },
  },
});

export default ThemeSchema;
