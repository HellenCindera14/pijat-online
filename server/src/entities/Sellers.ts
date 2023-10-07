import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { Invoice } from "./Invoices"
import { Rating } from "./Ratings"
import { Article } from "./Articles"
import { Complaint } from "./Complaints"

@Entity({ name: "sellers" })
export class Seller {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    password: string

    @Column()
    address: string

    @Column()
    district: string
    
    @Column()
    email: string

    @Column()
    gender: string
    
    @Column()
    phone: string
    
    @Column({ nullable: true })
    image: string

    @Column({ default: 0 })
    balance: number
    
    @Column({ default: false })
    isPijetRefleksi: boolean

    @Column({ default: false })
    isPijetRelaksasi: boolean

    @Column({ default: false })
    isPijetKretek: boolean

    @Column({ default: false })
    isOpened: boolean

    @OneToMany(() => Invoice, (invoice) => invoice.seller, {
        onDelete : "SET NULL",
        onUpdate : "CASCADE"
    })
    invoices: Invoice[]

    @OneToMany(() => Rating, (rating) => rating.seller, {
        onDelete : "SET NULL",
        onUpdate : "CASCADE"
    })
    ratings: Rating[]

    @OneToMany(() => Article, (article) => article.seller, {
        onDelete : "SET NULL",
        onUpdate : "CASCADE"
    })
    articles: Article[]

    @OneToMany(() => Complaint, (complaint) => complaint.seller, {
        onDelete : "SET NULL",
        onUpdate : "CASCADE"
    })
    complaints: Complaint[]

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date
}
