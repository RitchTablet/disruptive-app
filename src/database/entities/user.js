import { EntitySchema } from 'typeorm';

export default new EntitySchema({
  name: 'User',
  tableName: 'users',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    username: {
      type: 'varchar',
      unique: true,
    },
    password: {
      type: 'varchar',
    },
    email: {
      type: 'varchar',
      unique: true,
    },
    fullName: {
      type: 'varchar',
    },
    dateOfBirth: {
      type: 'date',
    },
    gender: {
      type: 'varchar',
    },
    location: {
      type: 'varchar',
    },
    profilePicture: {
      type: 'varchar',
    },
  },
});
