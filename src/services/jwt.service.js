import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

class JwtService {
  constructor() {
    this.secret = process.env.JWT_SECRET;
    this.jwtOptions = {
      expiresIn: 86400,
    };
  }

  sign(payload) {
    return jwt.sign(payload, this.secret, this.jwtOptions);
  }
}

export default JwtService;
