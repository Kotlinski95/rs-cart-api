import { Injectable } from '@nestjs/common';
import { Cart } from '../models';
import { InjectRepository } from '@nestjs/typeorm';
import { Carts } from '../../database/entities/carts.entity';
import { Repository } from 'typeorm';
import { CartStatus } from 'src/shared/models';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Carts)
    private readonly cartsRepository: Repository<Carts>,
  ) {}
  private userCarts: Record<string, Cart> = {};

  async findByUserId(userId: string): Promise<Carts | undefined> {
    const carts = await this.cartsRepository.findOne({
      where: {
        userId,
      },
      relations: ['Cart_items'],
    });
    return carts;
  }

  async createByUserId(userId: string): Promise<Carts> {
    const carts = {
      userId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: CartStatus.Open,
      cartItems: [],
    } as unknown as Carts;

    return carts;
  }

  async findOrCreateByUserId(userId: string): Promise<Carts> {
    const userCart = await this.findByUserId(userId);

    if (userCart) {
      return userCart;
    }

    return this.createByUserId(userId);
  }

  async updateByUserId(userId: string, { Cart_items }: Carts): Promise<Carts> {
    const { id, ...rest } = await this.findOrCreateByUserId(userId);

    const updatedCart = {
      id,
      ...rest,
      Cart_items: [ ...Cart_items ],
    }

    return { ...updatedCart };
  }

  removeByUserId(userId): void {
    this.userCarts[ userId ] = null;
  }

}
