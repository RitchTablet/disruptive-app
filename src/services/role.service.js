import { dataSource } from "../database/typeorm.config.js";

class RoleService {
  constructor() {
    this.roleRepository = dataSource.getRepository("Role");
  }

  createRole(name) {
    return this.roleRepository.save({ name });
  }

  findAll() {
    return this.roleRepository.find();
  }
}

export default RoleService;
