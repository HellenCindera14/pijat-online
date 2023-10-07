import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from "typeorm"
import { Seller } from "./Sellers"
import { User } from "./Users"

@Entity({ name: "complaints" })
export class Complaint {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    subject: string

    @Column()
    content: string
    
    @Column({ nullable: true })
    image: string

    @Column({ default: false })
    isDone: boolean

    @ManyToOne(() => Seller, (seller) => seller.complaints, {
        onDelete : "SET NULL",
        onUpdate : "CASCADE"
    })
    seller: Seller

    @ManyToOne(() => User, (user) => user.complaints, {
        onDelete : "SET NULL",
        onUpdate : "CASCADE"
    })
    user: Seller

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date
}
