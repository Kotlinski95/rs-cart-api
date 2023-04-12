import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart_items } from './cart_items.entity';
import { CartStatus } from 'src/shared/models';

  @Entity()
  export class Carts {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid', nullable: false })
    userId: string;

    @Column({ type: 'date', nullable: false })
    createdAt: string;

    @Column({ type: 'date', nullable: false })
    updatedAt: string;

    @Column({ type: 'enum', enum: CartStatus, default: CartStatus.Open })
    status: CartStatus;

    @OneToMany(
      () => Cart_items,
      Cart_items => Cart_items.cart,
    )
    @JoinColumn({name: 'id', referencedColumnName: 'cart_id'})
    Cart_items: Cart_items[];
  }