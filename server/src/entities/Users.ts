import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, JoinColumn } from "typeorm"
import { Invoice } from "./Invoices"
import { Rating } from "./Ratings"
import { Complaint } from "./Complaints"
import { Role } from "./Roles"
import { Seller } from "./Sellers"

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

    @Column({ nullable: true })
    address: string

    @Column({ nullable: true })
    district: string

    @Column({ nullable: true })
    gender: string

    @Column({ nullable: true })
    phone: string

    @Column({ nullable: true })
    image: string

    @OneToMany(() => Invoice, (invoice) => invoice.user, {
        onDelete : "SET NULL",
        onUpdate : "CASCADE"
    })
    invoices: Invoice[]

    @OneToOne(() => Role, (role) => role.user, {
        onDelete : "SET NULL",
        onUpdate : "CASCADE"
    })
    role: Role

    @OneToOne(() => Seller)
    @JoinColumn()
    seller: Seller

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
