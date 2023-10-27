import { Like, Repository } from "typeorm";
import { Seller } from "../entities/Sellers";
import { AppDataSource } from "../data-source";
import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"
import { User } from "../entities/Users";

class SellerService {
    private readonly sellerRepository: Repository<Seller> =
    AppDataSource.getRepository(Seller)

    private readonly userRepository: Repository<User> =
    AppDataSource.getRepository(User)

    async find(gender?: any, district?: any): Promise<any> {
        try {
            const user = await this.userRepository.find({
                where: {
                    gender: gender,
                    district: Like(`%${district}`),
                    seller: {
                        isOpened: true,
                    },
                },
                order: {
                    id: "DESC",
                },
            })

            return user
        } catch (err) {
            throw new Error("Server Error!")
        }
    }
}

export default new SellerService()