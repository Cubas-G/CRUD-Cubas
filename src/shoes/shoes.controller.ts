import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ShoesService } from './shoes.service';
import { CreateShoesDto } from './dto/create-shoes.dto';

@Controller('shoes')
export class ShoesController {
  constructor(private readonly shoesService: ShoesService) {} 

  @Post()
  create(@Body() createShoesDto: CreateShoesDto) {
    return this.shoesService.create(createShoesDto);
  }

  @Get()
  findAll() {
    return this.shoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateShoesDto: CreateShoesDto) {
    return this.shoesService.update(id, updateShoesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoesService.remove(id);
  }
}
