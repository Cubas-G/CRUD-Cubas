import { Module } from '@nestjs/common';
import { ShoesService } from './shoes.service';
import { ShoesController } from './shoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shoe } from './entities/shoe.entity';
import { ShoeImage } from './entities/shoe.image.entities';


@Module({
  imports:[TypeOrmModule.forFeature([Shoe, ShoeImage])],
  controllers: [ShoesController],
  providers: [ShoesService]
})
export class ShoesModule {}