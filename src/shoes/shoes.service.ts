import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { UpdateShoeDto } from './dto/update-shoe.dto';
import { Shoe } from './entities/shoe.entity';
import { ShoeImage } from './entities/shoe.image.entities';



@Injectable()
export class ShoesService {
constructor(

@InjectRepository(Shoe)
private readonly shoeRepository: Repository<Shoe>,

@InjectRepository(ShoeImage)
private readonly ShoeImageRepository: Repository<ShoeImage>


){}


/* async create(createShoeDto: CreateShoeDto) {
 const shoe = await this.shoeRepository.create(createShoeDto);
 await this.shoeRepository.save(shoe);
    return shoe;
  }
   */
   
  async create(shoeDto: CreateShoeDto) {
    const { images = [], ...detalleShoe } = shoeDto;
    const shoe = await this.shoeRepository.create({
      ...detalleShoe,
      images: images.map((image) => this.ShoeImageRepository.create({url: image}),
      ),
    }); 
    
    await this.shoeRepository.save(shoe);
    return shoe;
    }
   
   
  findAll() {
    return this.shoeRepository.find();
  }
  

  findOne(id: string) {
    return this.shoeRepository.findOneBy({id});
  }

  
 /* async update(id: string, updateShoeDto: UpdateShoeDto) {
  const shoe = await this.findOne(id);
  const updateShoe = await this.shoeRepository.merge(
  shoe, UpdateShoeDto);
  
    return this.shoeRepository.update(id, updateShoe);
  } */

  async remove(id: string) {
  const shoe = await this.findOne(id);
  await this.shoeRepository.remove(shoe);
    return 'Shoe removed successfully';
  } 
   
   
   
   
   
   
   //Agregado En clase de practica
   
   async update(id: string, cambios: CreateShoeDto){
   const shoe = await this.shoeRepository.preload({
   id: id, 
   ...cambios, 
   images: [],
   });
   await this.shoeRepository.save(shoe);
   return shoe;
   } 
}