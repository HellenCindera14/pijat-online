import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { User } from "../entities/Users";

class UserService {
  private readonly userRepository: Repository<User> = AppDataSource.getRepository(User);

  async check(loginSession: any): Promise<any> {
    try {
      const user = await this.userRepository.findOne({
        where: {
          id: loginSession.user.id,
        },
      });

      return {
        message: "Token is valid!",
        user: {
          id: user.id,
          name: user.name,
          address: user.address,
          email: user.email,
          phone: user.phone,
          image: user.image,
        },
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async register(reqBody?: any): Promise<any> {
    try {
      const isEmailAvailable = await this.userRepository.findOne({
        where: {
          email: reqBody.email,
        },
        select: ["email"],
      });

      if (isEmailAvailable) {
        throw new Error("Email alreary registered!");
      }

      const password = await bcrypt.hash(reqBody.password, 10);

      const users = this.userRepository.create({
        name: reqBody.name,
        password: password,
        address: reqBody.address,
        email: reqBody.email,
        phone: reqBody.phone,
        image: reqBody.image,
      });

      await this.userRepository.save(users);

      return {
        message: "User successfully registered!",
        users: users,
      };
    } catch (err) {
      throw new Error("Something wrong on the server!");
    }
  }

  async login(reqBody: any): Promise<any> {
    try {
      const user = await this.userRepository.findOne({
        where: {
          email: reqBody.email,
        },
        select: ["id", "name", "email", "password"],
      });

      if (!user) {
        throw new Error("Email / password is wrong!");
      }

      const isPasswordValid = await bcrypt.compare(reqBody.password, user.password);

      if (!isPasswordValid) {
        throw new Error("Email / password is wrong!");
      }

      const token = jwt.sign({ user }, "dumbwaysterbaik", { expiresIn: "1d" });

      return {
        message: "Login successful!",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        token: token,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new UserService();
