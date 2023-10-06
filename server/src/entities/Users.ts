import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: "users" })
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    address: string

    @Column()
    email: string

    @Column()
    phone: string

    @Column({ nullable: true })
    image: string


}
