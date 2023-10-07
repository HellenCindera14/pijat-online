import { Repository } from "typeorm";
import { AddressTemplate } from "../entities/AddressTemplates";
import { AppDataSource } from "../data-source";

class AddressTemplateService {
    private readonly addressTemplateRepository: Repository<AddressTemplate> = 
    AppDataSource.getRepository(AddressTemplate)

    async find() {
        try {
            const addressTemplate = await this.addressTemplateRepository.find()

            return addressTemplate
        } catch (err) {
            throw new Error("Server Error!")
        }
    }

    async create(reqBody?: any): Promise<any> {
        try {
            const addressTemplate = this.addressTemplateRepository.create({
                address: reqBody.address,
            })

            await this.addressTemplateRepository.save(addressTemplate)

            return {
                message: "Data address template added!",
                addressTemplate: addressTemplate,
            }
        } catch (err) {
            throw new Error("Server Error!")
        }
    }

    async delete(id: any): Promise<any> {
        try {
            const addressTemplate = this.addressTemplateRepository.delete(id)
            return {
                message: "Data address template deleted!",
                addressTemplate: addressTemplate,
            }
        } catch (err) {
            throw new Error("Server Error!")
        }
    }
}

export default new AddressTemplateService()