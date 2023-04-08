
import { Module } from '@nestjs/common';
import { CartsModule } from './carts/carts.module';
import { CartItemsModule } from './cart_items/cart_items.module';

@Module({
  imports: [
    CartsModule,
    CartItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class ApiModule {}