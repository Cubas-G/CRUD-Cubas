import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShoesDto } from './dto/create-shoes.dto';
import { Shoes } from './entities/shoes.entity';

@Injectable()
export class ShoesService {
  constructor(
    @InjectRepository(Shoes)
    private readonly shoesRepository: Repository<Shoes>
  ){}


  async create(createShoesDto: CreateShoesDto) {
    const shoes = await this.shoesRepository.create(createShoesDto)
    await this.shoesRepository.save(shoes)

    return shoes; 
  }

  findAll() {
    return this.shoesRepository.find();
  }

  findOne(id: string) {
    return this.shoesRepository.findOneBy({id});
  }

  async update(id: string, updateShoesDto: CreateShoesDto) {
    const findShoes = await this.findOne(id);
    const updatedShoes = await this.shoesRepository.merge(
      findShoes,
      updateShoesDto
    )
    return this.shoesRepository.save(updatedShoes);
  }

  async remove(id: string) {
    const shoes = await this.findOne(id);
    await this.shoesRepository.remove(shoes);
    return'Shoes is removed successfully';
  }
}

