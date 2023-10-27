import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne } from "typeorm"
import { Seller } from "./Sellers"
import { User } from "./Users"

@Entity({ name: "roles" })
export class Role {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    role: string

    @OneToOne(() => User, (user) => user.role, {
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
