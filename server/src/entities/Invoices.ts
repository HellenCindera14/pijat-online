import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { Seller } from "./Sellers"
import { User } from "./Users"
import { InvoiceHistory } from "./InvoiceHistories"

@Entity({ name: "invoices" })
export class Invoice {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    csEmail: string

    @Column()
    csName: string

    @Column()
    csPhone: string
    
    @Column()
    csAddress: string

    @Column()
    district: string

    @Column()
    status: string
    
    @Column({ default: 0 })
    price: number

    @Column({ default: false })
    isPijetRefleksi: boolean

    @Column({ default: false })
    isPijetRelaksasi: boolean

    @Column({ default: false })
    isPijetKretek: boolean
    
    @ManyToOne(() => Seller, (seller) => seller.invoices, {
        onDelete : "SET NULL",
        onUpdate : "CASCADE"
    })

    seller: Seller

    @ManyToOne(() => User, (user) => user.invoices, {
        onDelete : "SET NULL",
        onUpdate : "CASCADE"
    })
    user: User

    @OneToOne(() => InvoiceHistory, (invoiceHistory) => invoiceHistory.invoice, {
        onDelete : "SET NULL",
        onUpdate : "CASCADE"
    })
    invoiceHistory: InvoiceHistory

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date
}
