import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carts } from 'src/database/entities/carts.entity';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Carts)
    private readonly cartsRepo: Repository<Carts>,
  ) {}

  async create(createCartDto: CreateCartDto) {
    try {
      await this.cartsRepo.insert(createCartDto);
    } catch (e) {
      return false;
    }
    return true;
  }

  async findAll() {
    return this.cartsRepo.find();
  }

  async findOne(id: string) {
    return this.cartsRepo.findOne({
      where: { id: id },
    });
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
