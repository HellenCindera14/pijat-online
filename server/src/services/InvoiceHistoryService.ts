import { AppDataSource } from '../data-source';
import { InvoiceHistory } from './../entities/InvoiceHistories';
import { Repository } from "typeorm";

class InvoiceHistoryService {
    private readonly InvoiceHistoryRepository: Repository<InvoiceHistory> =
    AppDataSource.getRepository(InvoiceHistory)

    async find() {
        try {
            const invoiceHistory = await this.InvoiceHistoryRepository.find({
                relations: ['user', 'seller'],
                order: {
                    id: 'DESC'
                },
                take: 1
            })

            return invoiceHistory
        } catch (err) {
            throw new Error("Server Error!")
        }
    }
}

export default new InvoiceHistoryService()