import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { Seller } from "./Sellers"
import { User } from "./Users"
import { InvoiceHistory } from "./InvoiceHistories"

@Entity({ name: "ratings" })
export class Rating {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    review: string

    @Column()
    start: number
    
    @ManyToOne(() => Seller, (seller) => seller.ratings)

    seller: Seller

    @ManyToOne(() => User, (user) => user.ratings)
    user: User

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date
}
