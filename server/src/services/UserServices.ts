import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { User } from "../entities/Users";
import { Seller } from "../entities/Sellers";

class UserService {
    private readonly userRepository: Repository<User> =
    AppDataSource.getRepository(User);

    private readonly sellerRepository: Repository<Seller> =
    AppDataSource.getRepository(Seller)

    async find(){
      try {
          const users = await this.userRepository.find({
              order: {
                  id: "DESC",
              },
              relations: ["seller"]
          })

          return users
      } catch (err) {
          throw new Error("Server Error!")
      }
  }

async create(reqBody: any): Promise<any> {
    try {
        const isEmailAvailable = await this.userRepository.findOne({
            where: {
                email: reqBody.email,
            },
        });

        if (isEmailAvailable) {
            throw new Error("Email already registered!");
        }

        const password = await bcrypt.hash(reqBody.password, 10);

        let user: User;
        let seller: Seller | undefined;

        if (reqBody.role === "seller") {
            seller = this.sellerRepository.create({
                isPijetKretek: false,
                isPijetRefleksi: false,
                isPijetRelaksasi: false,
                image: reqBody.image,
            });
            await this.sellerRepository.save(seller);

            user = this.userRepository.create({
                name: reqBody.name,
                email: reqBody.email,
                password: password,
                seller: seller,
            });
        await this.userRepository.save(user);

        } else {
            user = this.userRepository.create({
                name: reqBody.name,
                email: reqBody.email,
                password: password,
            });
            await this.userRepository.save(user);

        }

        const key = process.env.SECRET_KEY as string        

        const token = jwt.sign({user}, key, { expiresIn: '1d'})


        return {
            message: "User successfully registered!",
            seller: seller,
            user: user,
            token: token,
        };
    } catch (err) {
        throw new Error("Something went wrong on the server!");
    }
}


// async update(reqBody?: any, id?:any): Promise<any> {
//     try {
//         const user = await this.userRepository.findOneOrFail({
//             where: {
//                 id: id
//             }
//         })

//         const seller = await this.sellerRepository.findOne({
//             where: {
//                 id: user.id
//             }
//         })
        
//         user.seller = seller
//         user.email = reqBody.email
//         user.address = reqBody.address
//         user.image = reqBody.image
//         user.gender = reqBody.gender
//         user.name = reqBody.name
//         user.phone = reqBody.phone

//         const resUser = await this.userRepository.save(user)

        

//         seller.user = user
//         seller.balance = reqBody.balance
//         seller.isPijetRefleksi = reqBody.isPijetRefleksi
//         seller.isPijetRelaksasi = reqBody.isPijetRelaksasi
//         seller.isPijetKretek = reqBody.isPijetKretek


//         return {
//             message: "User successfully updated!",
//             seller: seller,
//             resUser: resUser,
//         }
//     } catch (err) {
//         throw new Error("Something wrong on the server!")
//     }
// }

async login(reqBody?: any): Promise<any> {
    try {
        const user = await this.userRepository.findOne({
            where: {
                email: reqBody.email,
            },
            relations: ["seller"],
            select: ["id", "name", "email", "password", "seller"]
        })

        if(!user) {
            throw new Error("Email / Password is wrong!")
        }

        const isPassValid = await bcrypt.compare(reqBody.password, user.password) 

        if (!isPassValid) {
            throw new Error("Email / Password is wrong!")
        }

        const key = process.env.SECRET_KEY as string        

        const token = jwt.sign({user}, key, { expiresIn: '1d'})
        
        return {
            message: "Login successfully!",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
            token: token
        }
    } catch (err) {
        throw new Error("Something wrong on the server!")
    }
}
}

export default new UserService();
