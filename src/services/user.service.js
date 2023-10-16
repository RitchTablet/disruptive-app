import bcrypt from "bcrypt";
import { dataSource } from "../database/typeorm.config.js";

class UserService {
  constructor() {
    this.userRepository = dataSource.getRepository("User");
  }

  find() {
    return this.userRepository.find({
      select: [
        "id",
        "username",
        "email",
        "fullName",
        "dateOfBirth",
        "gender",
        "location",
        "profilePicture",
      ],
    });
  }

  async findOneByLogin(email, password) {
    const user = await this.userRepository.findOne({ where: { email } });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return user;
      }
    }

    return null;
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
