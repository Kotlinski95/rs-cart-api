import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  @Entity()
  export class Cart_items {
    @PrimaryGeneratedColumn('uuid')
    cart_id: string;

    @Column({ type: 'text', nullable: false })
    product_id: string;
  }