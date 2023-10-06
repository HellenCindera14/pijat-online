import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: "sellers" })
export class Sellers {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    address: string

    @Column()
    district: string
    
    @Column()
    email: string
    
    @Column()
    isPijetUrat: boolean

    @Column()
    phone: string

    @Column({ nullable: true })
    image: string


}
