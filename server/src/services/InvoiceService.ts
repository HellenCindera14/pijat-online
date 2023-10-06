import { Repository } from "typeorm"
import { Invoice } from "../entities/Invoices"
import { AppDataSource } from "../data-source"

class InvoiceService {
    private readonly invoiceRepository: Repository<Invoice> =
    AppDataSource.getRepository(Invoice)

    async find() {
        try {
            const invoice = await this.invoiceRepository.find({
                order: {
                    id: "DESC"
                }
            })
            
            return invoice
        } catch (err) {
            throw new Error("Server Error!")
        }
    }
}

export default new InvoiceService()