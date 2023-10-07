import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { Invoice } from "./Invoices"
import { Rating } from "./Ratings"
import { Complaint } from "./Complaints"

@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    password: string
    
    @Column()
    email: string

    @Column()
    address: string

    @Column()
    gender: string

    @Column()
    phone: string

    @Column({ nullable: true })
    image: string

    @OneToMany(() => Invoice, (invoice) => invoice.user, {
        onDelete : "SET NULL",
        onUpdate : "CASCADE"
    })
    invoices: Invoice[]

    @OneToMany(() => Rating, (rating) => rating.user, {
        onDelete : "SET NULL",
        onUpdate : "CASCADE"
    })
    ratings: Rating[]

    @OneToMany(() => Complaint, (complaint) => complaint.user, {
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
