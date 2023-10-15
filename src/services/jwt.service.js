import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

class JwtService {
  constructor() {
    this.secret = process.env.JWT_SECRET;
    this.jwtOptions = {
      expiresIn: "8h",
    };
  }

  sign(payload) {
    return jwt.sign(payload, this.secret, this.jwtOptions);
  }

  verify(token) {
    return jwt.verify(token, this.secret);
  }
}

export default JwtService;
