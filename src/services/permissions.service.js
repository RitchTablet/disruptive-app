import { dataSource } from "../database/typeorm.config.js";

class PermissionsServices {
  constructor() {
    this.roleRepository = dataSource.getRepository("Permission");
  }

  createPermision(name) {
    return this.roleRepository.save({ name });
  }

  findAllPermisions() {
    return this.roleRepository.find();
  }
}

export default PermissionsServices;
