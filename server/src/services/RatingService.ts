import { Repository } from "typeorm";
import { Rating } from "../entities/Ratings";
import { AppDataSource } from "../data-source";

class RatingService {
    private readonly ratingRepository: Repository<Rating> =
    AppDataSource.getRepository(Rating)

    async find() {
        try {
            const rating = await this.ratingRepository.find()

            return rating
        } catch (err) {
            throw new Error("Server Error!")
        }
    }

    async create(reqBody?: any, loginSession?:  any): Promise<any> {
        try {
            const rating = this.ratingRepository.create({
                review: reqBody.review,
                star: reqBody.star,
                seller: reqBody.seller,
                user: loginSession,
            })

            return {
                message: "Data rating added!",
                rating: rating
            }
        } catch (err) {
            throw new Error("Server Error!")
        }
    }

    async update(reqBody?: any, id?: any, loginSession?:  any): Promise<any> {
        try {
            const rating = await this.ratingRepository.findOne({
                where: {
                    id: id
                }
            })

            rating.review = reqBody.review
            rating.star = reqBody.star
            rating.seller = reqBody.seller
            rating.user = loginSession

            await this.ratingRepository.save(rating)

            return {
                message: "Data rating updated!",
                rating: rating,
            }
        } catch (err) {
            throw new Error("Server Error!")
        }
    }

    async delete(id: any) {
        try {
            const rating = await this.ratingRepository.delete(id)

            return {
                message: "Data rating deleted!",
                rating: rating,
            }
        } catch (err) {
            throw new Error("Server Error!")
        }
    }
}

export default new RatingService()