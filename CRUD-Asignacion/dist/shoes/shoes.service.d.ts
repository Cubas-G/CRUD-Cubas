import { Repository } from 'typeorm';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { Shoe } from './entities/shoe.entity';
import { ShoeImage } from './entities/shoe.image.entities';
export declare class ShoesService {
    private readonly shoeRepository;
    private readonly ShoeImageRepository;
    constructor(shoeRepository: Repository<Shoe>, ShoeImageRepository: Repository<ShoeImage>);
    create(shoeDto: CreateShoeDto): Promise<Shoe>;
    findAll(): Promise<Shoe[]>;
    findOne(id: string): Promise<Shoe>;
    remove(id: string): Promise<string>;
    update(id: string, cambios: CreateShoeDto): Promise<Shoe>;
}
