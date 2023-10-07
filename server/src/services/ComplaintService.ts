import { Repository } from "typeorm";
import { Complaint } from "../entities/Complaints";
import { AppDataSource } from "../data-source";

class ComplaintService {
    private readonly complaintRepository: Repository<Complaint> =
    AppDataSource.getRepository(Complaint)

    async find() {
        try {
            const complaint = await this.complaintRepository.find()

            return complaint
        } catch (err) {
            throw new Error("Server Error!")
        }
    }

    async create(reqBody?: any, loginSession?: any): Promise<any> {
        try {
            const complaint = this.complaintRepository.create({
                subject: reqBody.subject,
                content: reqBody.content,
                image: reqBody.image,
                seller: reqBody.seller,
                user: loginSession,
            })

            await this.complaintRepository.save(complaint)

            return {
                message: "Data complaint created!",
                complaint: complaint
            }
        } catch (err) {
            throw new Error("Server Error!")
        }
    }

    async delete(id: any): Promise<any> {
        try {
            const complaint = await this.complaintRepository.delete(id)
            return {
                message: "Data complaint deleted!",
                complaint: complaint,
            }
        } catch (err) {
            throw new Error("Server Error!")
        }
    }
}

export default new ComplaintService()