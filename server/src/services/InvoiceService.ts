import { Repository } from "typeorm"
import { Invoice } from "../entities/Invoices"
import { AppDataSource } from "../data-source"
import { InvoiceHistory } from "../entities/InvoiceHistories"
import { Seller } from "../entities/Sellers"

class InvoiceService {
    private readonly invoiceRepository: Repository<Invoice> =
    AppDataSource.getRepository(Invoice)

    private readonly invoiceHistoryRepository: Repository<InvoiceHistory> =
    AppDataSource.getRepository(InvoiceHistory)

    private readonly sellerRepository: Repository<Seller> =
    AppDataSource.getRepository(Seller)

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

    async create(reqBody?: any, loginSession?: any): Promise<any> {
        try {
            const invoice = this.invoiceRepository.create({
                csEmail: reqBody.csEmail,
                csAddress: reqBody.csAddress,
                csName: reqBody.csName,
                csPhone: reqBody.csPhone,
                district: reqBody.district,
                price: reqBody.price,
                status: reqBody.status,
                isPijetKretek: reqBody.isPijetKretek,
                isPijetRefleksi: reqBody.isPijetRefleksi,
                isPijetRelaksasi: reqBody.isPijetRelaksasi,
                user: loginSession,
                seller: reqBody.seller,
            })

            await this.invoiceRepository.save(invoice)

            const seller = await this.sellerRepository.findOne({
                where: {
                    id: reqBody.seller
                }
            })

            seller.balance = seller.balance - 1000

            await this.sellerRepository.save(seller)

            return {
                message: "Invoice successfully registered!",
                invoice: invoice,
            }
        } catch (err) {
            throw new Error("Server Error!")
        }
    }

    async update(reqBody?: any, id?: any, loginSession?:any): Promise<any> {
        try {
            const invoice = await this.invoiceRepository.findOneOrFail({
                where: {
                    id: id
                }
            })
    
            invoice.csEmail = reqBody.csEmail
            invoice.csAddress = reqBody.csAddress
            invoice.csName = reqBody.csName
            invoice.csPhone = reqBody.csPhone
            invoice.district = reqBody.district
            invoice.price = reqBody.price
            invoice.status = reqBody.status
            invoice.isPijetKretek = reqBody.isPijetKretek
            invoice.isPijetRefleksi = reqBody.isPijetRefleksi
            invoice.isPijetRelaksasi = reqBody.isPijetRelaksasi
            invoice.seller = reqBody.seller
            invoice.user = loginSession

            await this.invoiceRepository.save(invoice)

            const invoiceHistory = this.invoiceHistoryRepository.create({
                status: invoice.status,
                price: invoice.price,
                isPijetKretek: invoice.isPijetKretek,
                isPijetRelaksasi: invoice.isPijetRelaksasi,
                isPijetRefleksi: invoice.isPijetRefleksi,
                user: invoice.user,
                seller: invoice.seller,
            })

            await this.invoiceHistoryRepository.save(invoiceHistory)

            return {
                message: "Invoice successfully updated!",
                invoice: invoice,
            }
        } catch (err) {
            throw new Error("Something wrong on the server!")
        }
    }

    async delete(id: any): Promise<any> {
        try {
            const invoice = await this.invoiceRepository.delete(id)
            return {
                message: "Invoice successfully deleted!",
                invoice: invoice,
            }
        } catch (err) {
            throw new Error("Something wrong on the server!")
        }
    }
}

export default new InvoiceService()