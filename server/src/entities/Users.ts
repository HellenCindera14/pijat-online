import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { Invoice } from "./Invoices"
import { Rating } from "./Ratings"

@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    password: string

    @Column()
    address: string

    @Column()
    email: string

    @Column()
    phone: string

    @Column({ nullable: true })
    image: string

    @OneToMany(() => Invoice, (invoice) => invoice.user, {
        onDelete : "NO ACTION",
        onUpdate : "NO ACTION"
    })
    invoices: Invoice[]

    @OneToMany(() => Rating, (rating) => rating.user, {
        onDelete : "NO ACTION",
        onUpdate : "NO ACTION"
    })
    ratings: Rating[]
    
    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date
}
