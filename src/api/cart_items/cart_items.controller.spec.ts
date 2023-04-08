import { Test, TestingModule } from '@nestjs/testing';
import { CartItemsController } from './cart_items.controller';
import { CartItemsService } from './cart_items.service';

describe('CartItemsController', () => {
  let controller: CartItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartItemsController],
      providers: [CartItemsService],
    }).compile();

    controller = module.get<CartItemsController>(CartItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
