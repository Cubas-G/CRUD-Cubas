import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
constructor(@InjectRepository(Client)
private readonly clientRepository: Repository<Client>
){}


 async create(createClientDto: CreateClientDto) {
 const client = await this.clientRepository.create(createClientDto);
 await this.clientRepository.save(client);
    return client;
  }
  
  findAll() {
    return this.clientRepository.find();
  }
  

  findOne(id: string) {
    return this.clientRepository.findOneBy({id});
  }

  
  async update(id: string, updateClientDto: UpdateClientDto) {
  const client = await this.findOne(id);
  const updateClient = await this.clientRepository.merge(
  client, updateClientDto);
  
    return this.clientRepository.update(id, updateClient);
  }

  async remove(id: string) {
  const client = await this.findOne(id);
  await this.clientRepository.remove(client);
    return 'Clien removed successfully';
  }
  
}