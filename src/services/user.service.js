import bcrypt from "bcrypt";
import { dataSource } from "../database/typeorm.config.js";

class UserService {
  constructor() {
    this.userRepository = dataSource.getRepository("User");
  }

  find() {
    return this.userRepository.find();
  }

  findOneByLogin(email, password) {
    return this.userRepository.find({ email, password });
  }

  async create(user) {
    const { password } = user;
    const hashedPassword = bcrypt.hashSync(password, 10);
    user.password = hashedPassword;
    const usersaved = await this.userRepository.save(user);
    delete usersaved.password;

    return usersaved;
  }
}

export default UserService;
