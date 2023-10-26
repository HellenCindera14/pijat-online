import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { Like, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Seller } from "../entities/Sellers";

class SellerService {
  private readonly sellerRepository: Repository<Seller> = AppDataSource.getRepository(Seller);

  // async login(req: Request, res: Response) {
  //   try {
  //     const { email, password } = req.body;
  //     const seller = await this.sellerRepository.findOne({
  //       where: {
  //         email,
  //       },
  //       select: ["id", "name", "email", "password", "district"],
  //     });
  //     if (!seller) {
  //       return res.status(400).json({
  //         error: "invalid email",
  //       });
  //     }
  //     console.log("thise is data seller", seller);

  //     const passwordValid = await bcrypt.compare(password, seller.password);
  //     if (!passwordValid) {
  //       return res.status(400).json({
  //         error: "invalid password",
  //       });
  //     }

  //     const token = jwt.sign({ seller }, "pijatonline++", { expiresIn: "1d" });
  //     return res.status(200).json({
  //       message: "login is successfully",
  //       seller: {
  //         id: seller.id,
  //         name: seller.name,
  //         email: seller.email,
  //       },
  //       token: token,
  //     });
  //   } catch (error) {
  //     return res.status(500).json({
  //       error: "there's an error",
  //     });
  //   }
  // }
  async login(reqBody: any): Promise<any> {
    try {
      const seller = await this.sellerRepository.findOne({
        where: {
          email: reqBody.email,
        },
        select: ["id", "name", "email", "password"],
      });

      if (!seller) {
        throw new Error("Email / Password is wrong!");
      }

      const isPassValid = await bcrypt.compare(reqBody.password, seller.password);

      if (!isPassValid) {
        throw new Error("Email / Password is wrong!");
      }

      //   const key = process.env.SECRET_KEY as string;

      const token = jwt.sign({ seller }, "pijatonline++", { expiresIn: "1d" });

      return {
        message: "Login successfully!",
        seller: {
          id: seller.id,
          name: seller.name,
          email: seller.email,
        },
        token: token,
      };
    } catch (err) {
      throw new Error("Something wrong on the server!");
    }
  }

  async register(reqBody?: any): Promise<any> {
    try {
      const isEmailAvailable = await this.sellerRepository.findOne({
        where: {
          email: reqBody.email,
        },
        select: ["email"],
      });

      if (isEmailAvailable) {
        throw new Error("Email alreary registered!");
      }

      const password = await bcrypt.hash(reqBody.password, 10);

      const seller = this.sellerRepository.create({
        name: reqBody.name,
        email: reqBody.email,
        district: reqBody.district,
        address: reqBody.address,
        phone: reqBody.phone,
        password: password,
        gender: reqBody.gender,
        isPijetKretek: reqBody.isPijetKretek,
        isPijetRefleksi: reqBody.isPijetRefleksi,
        isPijetRelaksasi: reqBody.isPijetRelaksasi,
        image: reqBody.image,
      });

      await this.sellerRepository.save(seller);

      const token = jwt.sign({ seller }, "pijatonline++", { expiresIn: "1d" });

      return {
        message: "Seller successfully registered!",
        seller: seller,
        token: token,
      };
    } catch (err) {
      throw new Error("Something wrong on the server!");
    }
  }

  async find(gender?: any, district?: any): Promise<any> {
    try {
      const seller = await this.sellerRepository.find({
        where: {
          gender: gender,
          isOpened: true,
          district: Like(`%${district}`),
        },
        order: {
          id: "DESC",
        },
      });

      return seller;
    } catch (err) {
      throw new Error("Server Error!");
    }
  }

  async update(reqBody?: any, id?: any): Promise<any> {
    try {
      const seller = await this.sellerRepository.findOneOrFail({
        where: {
          id: id,
        },
      });

      seller.email = reqBody.email;
      seller.address = reqBody.address;
      seller.balance = reqBody.balance;
      seller.district = reqBody.district;
      seller.image = reqBody.image;
      seller.gender = reqBody.gender;
      seller.isPijetRefleksi = reqBody.isPijetRefleksi;
      seller.isPijetRelaksasi = reqBody.isPijetRelaksasi;
      seller.isPijetKretek = reqBody.isPijetKretek;
      seller.name = reqBody.name;
      seller.phone = reqBody.phone;
      seller.balance = reqBody.balance;

      await this.sellerRepository.save(seller);

      return {
        message: "Seller successfully updated!",
        seller: seller,
      };
    } catch (err) {
      throw new Error("Something wrong on the server!");
    }
  }

  // async check(req: Request, res: Response) {
  //   try {
  //     const loginSession = res.locals.loginSession;
  //     console.log("this loginSession:", loginSession);

  //     const seller = await this.sellerRepository.findOne({
  //       where: {
  //         id: loginSession.seller.id,
  //       },
  //       select: ["id", "name", "email", "password", "district"],
  //     });
  //     return res.status(200).json({
  //       message: "token of massage is valid!",
  //       seller,
  //     });
  //   } catch (error) {
  //     return res.status(200).json({
  //       message: "This error",
  //       error,
  //     });
  //   }
  // }

  async check(loginSession: any): Promise<any> {
    try {
      const seller = await this.sellerRepository.findOne({
        where: {
          id: loginSession.seller.id,
        },
        select: ["id", "name", "email", "password", "district"],
      });
      return {
        message: "The token of massage is valid!",
        seller: {
          id: seller.id,
          name: seller.name,
          password: seller.password,
          address: seller.address,
          districk: seller.district,
          email: seller.email,
          gender: seller.gender,
          phone: seller.phone,
          image: seller.image,
          balance: seller.balance,
          isPijetRefleksi: seller.isPijetRefleksi,
          isPijetKretek: seller.isPijetKretek,
          isPijetRelaksasi: seller.isPijetRelaksasi,
        },
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new SellerService();
