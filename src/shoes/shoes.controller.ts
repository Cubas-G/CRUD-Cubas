import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ShoesService } from './shoes.service';
import { CreateShoeDto } from './dto/create-shoe.dto';
import {UpdateShoeDto} from './dto/update-shoe.dto';

@Controller('shoes')
export class ShoesController {
  constructor(private readonly shoesService: ShoesService) {} 

  @Post()
  create(@Body() createShoeDto: CreateShoeDto) {
    return this.shoesService.create(createShoeDto);
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
    @Body() updateShoesDto: CreateShoeDto) {
    return this.shoesService.update(id, updateShoesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoesService.remove(id);
  }
}