import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { Carts } from './carts.entity';

  @Entity()
  export class Cart_items {
    @PrimaryGeneratedColumn('uuid')
    cart_id: string;

    @ManyToOne(
      () => Carts,
      carts => carts.Cart_items,
    )
    @JoinColumn({ name: 'cart_id', referencedColumnName: 'id' })
    cart: Carts;

    @Column({ type: 'uuid' })
    productId: string;
  
    @Column({ type: 'int' })
    count: number;
  }