import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { Seller } from "./Sellers"
import { User } from "./Users"
import { Invoice } from "./Invoices"

@Entity({ name: "invoicehistories" })
export class InvoiceHistory {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: 0 })
    price: number

    @Column()
    status: string
    
    @Column({ default: false })
    isPijetRefleksi: boolean

    @Column({ default: false })
    isPijetRelaksasi: boolean

    @Column({ default: false })
    isPijetKretek: boolean
    
    @OneToOne(() => Invoice, (invoice) => invoice.invoiceHistory)
    invoice: Invoice

    @ManyToOne(() => Seller, (seller) => seller.invoices)

    seller: Seller
    
    @ManyToOne(() => User, (user) => user.invoices)
    user: User

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date
}
