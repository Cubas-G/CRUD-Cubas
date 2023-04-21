import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ShoeImage } from './shoe.image.entities';

@Entity()
export class Shoe {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({type: 'text'})
    name:string;

    @Column({type:'text'})
    lastName:string;

    @Column({type: 'text',})
    directions:string;

    @Column({type:'numeric'})
    number:number;

    @Column({type:'text'})
    ced:string;    


//Campo Agregado en Clase de Practica
// Relacion de uno a muchos Muchas imagens pueden de tener varios productos

@OneToMany(
() => ShoeImage, 
(shoesImage) => shoesImage.shoe,{
cascade: true
})
images?: ShoeImage[];
}