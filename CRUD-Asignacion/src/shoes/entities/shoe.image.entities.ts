import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Shoe } from "./shoe.entity";


@Entity()

export class ShoeImage {
@PrimaryGeneratedColumn()
id: number;

@Column ()
url: string;

//Relaciones de uno  muchos
//MUchas imagene pueden sser un producto

@ManyToOne(() => Shoe, (shoes) => shoes.images)
shoe: Shoe;
}