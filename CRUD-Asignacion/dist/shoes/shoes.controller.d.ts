import { ShoesService } from './shoes.service';
import { CreateShoeDto } from './dto/create-shoe.dto';
export declare class ShoesController {
    private readonly shoesService;
    constructor(shoesService: ShoesService);
    create(createShoeDto: CreateShoeDto): Promise<import("./entities/shoe.entity").Shoe>;
    findAll(): Promise<import("./entities/shoe.entity").Shoe[]>;
    findOne(id: string): Promise<import("./entities/shoe.entity").Shoe>;
    update(id: string, updateShoesDto: CreateShoeDto): Promise<import("./entities/shoe.entity").Shoe>;
    remove(id: string): Promise<string>;
}
