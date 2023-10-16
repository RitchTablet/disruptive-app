import { EntitySchema } from "typeorm";

const Content = new EntitySchema({
  name: "Content",
  tableName: "contents",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    title: {
      type: "varchar",
    },
    type: {
      type: "varchar",
    },
    url: {
      type: "varchar",
    },
  },
});

export default Content;
