import { Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart_items } from 'src/database/entities/cart_items.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartItemsService {
  constructor(
    @InjectRepository(Cart_items)
    private readonly cartItemsRepo: Repository<Cart_items>,
  ) {}
  async create(createCartItemDto: CreateCartItemDto) {
    try {
      await this.cartItemsRepo.insert(createCartItemDto);
    } catch (e) {
      return false;
    }
    return true;
  }

  async findAll() {
    return this.cartItemsRepo.find();
  }

  async findOne(id: string) {
    return this.cartItemsRepo.findOne({
      where: { cart_id: id },
    });
  }

  update(id: number, updateCartItemDto: UpdateCartItemDto) {
    return `This action updates a #${id} cartItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} cartItem`;
  }
}
