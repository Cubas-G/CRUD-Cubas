import { Module } from '@nestjs/common';
import { Shoes } from './entities/shoes.entity';
import { ShoesService} from './shoes.service';
import { ShoesController } from './shoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Shoes])],
  controllers: [ShoesController],
  providers: [ShoesService]
})
export class ShoesModule {}
