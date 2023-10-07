import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { User } from "../entities/Users";

class UserService {
  private readonly userRepository: Repository<User> =
    AppDataSource.getRepository(User);

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
        email: reqBody.email,
        password: password,
        // address: reqBody.address,
        // phone: reqBody.phone,
        // image: reqBody.image,
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

  async login(reqBody?: any): Promise<any> {
    console.log("masuk1");
    try {
      console.log("masuk2");

      const users = await this.userRepository.findOne({
        where: {
          email: reqBody.email,
        },
        select: ["id", "name", "email", "password"],
      });

      if (!users) {
        console.log("masuk3");

        throw new Error("Email / Password is wrong!");
      }

      const isPassValid = await bcrypt.compare(
        reqBody.password,
        users.password
      );

      console.log("masuk4");

      if (!isPassValid) {
        throw new Error("Email / Password is wrong!");
      }

      const key = process.env.SECRET_KEY as string;
      console.log("masuk5");

      const token = jwt.sign({ users }, key, { expiresIn: "1d" });
      console.log("masuk6");

      return {
        message: "Login successfully!",
        users: {
          id: users.id,
          name: users.name,
          email: users.email,
        },
        token: token,
      };
    } catch (err) {
      throw new Error("Something wrong on the server!");
    }
  }
}

export default new UserService();
