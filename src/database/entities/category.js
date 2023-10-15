import { EntitySchema } from 'typeorm';

export default new EntitySchema({
  name: "Category", // Will use table name `category` as default behavior.
  tableName: "categories", // Optional: Provide `tableName` property to override the default behavior for table name.
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
});



