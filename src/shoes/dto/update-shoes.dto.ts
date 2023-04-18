import { PartialType } from '@nestjs/mapped-types';
import { CreateShoesDto } from './create-shoes.dto';

export class UpdateFoodDto extends PartialType(CreateShoesDto) {}
