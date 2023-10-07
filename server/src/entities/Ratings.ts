import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { Seller } from "./Sellers"
import { User } from "./Users"

@Entity({ name: "ratings" })
export class Rating {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    review: string

    @Column({ default: 0 })
    star: number
    
    @ManyToOne(() => Seller, (seller) => seller.ratings, {
        onDelete : "SET NULL",
        onUpdate : "CASCADE"
    })
    seller: Seller

    @ManyToOne(() => User, (user) => user.ratings, {
        onDelete : "SET NULL",
        onUpdate : "CASCADE"
    })
    user: User

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date
}
