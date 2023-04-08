import { Module } from '@nestjs/common';
import { CartItemsService } from './cart_items.service';
import { CartItemsController } from './cart_items.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CartItemsController],
  providers: [CartItemsService]
})
export class CartItemsModule {}
