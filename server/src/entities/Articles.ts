import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from "typeorm"
import { Seller } from "./Sellers"

@Entity({ name: "articles" })
export class Article {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @Column({ nullable: true })
    image: string

    @ManyToOne(() => Seller, (seller) => seller.articles, {
        onDelete : "SET NULL",
        onUpdate : "CASCADE"
    })
    seller: Seller

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date
}
