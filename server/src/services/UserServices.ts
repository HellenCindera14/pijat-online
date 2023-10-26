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
        select: ["id", "name", "email", "password", "gender", "phone"],
      });

      return {
        message: "the token of user is valid!",
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

  async find(gender?: any): Promise<any> {
    try {
      const users = await this.userRepository.find({
        where: {
          gender: gender,
        },
        order: {
          id: "DESC",
        },
      });

      return users;
    } catch (err) {
      throw new Error("Server Error!");
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

      const user = this.userRepository.create({
        name: reqBody.name,
        password: password,
        address: reqBody.address,
        email: reqBody.email,
        phone: reqBody.phone,
        image: reqBody.image,
      });

      await this.userRepository.save(user);

      const token = jwt.sign({ user }, "pijatonline++", { expiresIn: "1d" });

      return {
        message: "User successfully registered!",
        users: user,
        token: token,
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

      const token = jwt.sign({ user }, "pijatonline++", { expiresIn: "1d" });

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
