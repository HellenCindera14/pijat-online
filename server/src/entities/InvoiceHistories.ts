import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { Seller } from "./Sellers"
import { User } from "./Users"
import { Invoice } from "./Invoices"

@Entity({ name: "invoiceHistories" })
export class InvoiceHistory {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: 0 })
    price: number
    
    @Column({ default: false })
    isPijetUrut: boolean

    @Column({ default: false })
    isPijetRefleksi: boolean

    @Column({ default: false })
    isPijetRelaksasi: boolean

    @Column({ default: false })
    isPijetkretek: boolean
    
    @OneToOne(() => Invoice, (invoice) => invoice.invoiceHistory, {
        onDelete : "NO ACTION",
        onUpdate : "NO ACTION"
    })
    invoice: Invoice

    @ManyToOne(() => Seller, (seller) => seller.invoices, {
        onDelete : "NO ACTION",
        onUpdate : "NO ACTION"
    })

    seller: Seller
    
    @ManyToOne(() => User, (user) => user.invoices, {
        onDelete : "NO ACTION",
        onUpdate : "NO ACTION"
    })
    user: User

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date
}
