import { Repository } from "typeorm";
import { Seller } from "../entities/Sellers";
import { AppDataSource } from "../data-source";
import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"

class SellerService {
    private readonly sellerRepository: Repository<Seller> =
    AppDataSource.getRepository(Seller)

    async find(gender?: any): Promise<any> {
        try {
            const seller = await this.sellerRepository.find({
                where: {
                    gender: gender,
                    isOpened: true,
                },
                order: {
                    id: "DESC",
                },
            })

            return seller
        } catch (err) {
            throw new Error("Server Error!")
        }
    }

    async create(reqBody?: any): Promise<any> {
        try {
            const isEmailAvailable = await this.sellerRepository.findOne({
                where: {
                    email: reqBody.email
                },
                select: ['email']
            })

            if (isEmailAvailable) {
                throw new Error("Email alreary registered!")
            }

            const password = await bcrypt.hash(reqBody.password, 10)

            const seller = this.sellerRepository.create({
                name: reqBody.name,
                email: reqBody.email,
                district: reqBody.district,
                address: reqBody.address,
                phone: reqBody.phone,
                password: password,
                gender: reqBody.gender,
                isPijetKretek:reqBody.isPijetKretek,
                isPijetRefleksi: reqBody.isPijetRefleksi,
                isPijetRelaksasi: reqBody.isPijetRelaksasi,
                image: reqBody.image,
            })

            await this.sellerRepository.save(seller)

            return {
                message: "Seller successfully registered!",
                seller: seller,
            }
        } catch (err) {
            throw new Error("Something wrong on the server!")
        }
    }

    async update(reqBody?: any, id?:any): Promise<any> {
        try {
            const seller = await this.sellerRepository.findOneOrFail({
                where: {
                    id: id
                }
            })
            
            seller.email = reqBody.email
            seller.address = reqBody.address
            seller.balance = reqBody.balance
            seller.district = reqBody.district
            seller.image = reqBody.image
            seller.gender = reqBody.gender
            seller.isPijetRefleksi = reqBody.isPijetRefleksi
            seller.isPijetRelaksasi = reqBody.isPijetRelaksasi
            seller.isPijetKretek = reqBody.isPijetKretek
            seller.name = reqBody.name
            seller.phone = reqBody.phone
            seller.balance = reqBody.balance

            await this.sellerRepository.save(seller)

            return {
                message: "Seller successfully updated!",
                seller: seller,
            }
        } catch (err) {
            throw new Error("Something wrong on the server!")
        }
    }

    async login(reqBody?: any): Promise<any> {
        try {
            const seller = await this.sellerRepository.findOne({
                where: {
                    email: reqBody.email,
                },
                select: ["id", "name", "email", "password"]
            })

            if(!seller) {
                throw new Error("Email / Password is wrong!")
            }

            const isPassValid = await bcrypt.compare(reqBody.password, seller.password) 

            if (!isPassValid) {
                throw new Error("Email / Password is wrong!")
            }

            const key = process.env.SECRET_KEY as string        

            const token = jwt.sign({seller}, key, { expiresIn: '1d'})
            
            return {
                message: "Login successfully!",
                seller: {
                    id: seller.id,
                    name: seller.name,
                    email: seller.email,
                },
                token: token
            }
        } catch (err) {
            throw new Error("Something wrong on the server!")
        }
    }
}

export default new SellerService()