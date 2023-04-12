import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CartItemsService } from './cart_items.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cart_items')
@Controller('cart_items')
export class CartItemsController {
  constructor(private readonly cartItemsService: CartItemsService) {}

  @Post()
  create(@Body() createCartItemDto: CreateCartItemDto) {
    return this.cartItemsService.create(createCartItemDto);
  }

  @Get()
  findAll() {
    return this.cartItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartItemsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCartItemDto: UpdateCartItemDto) {
    return this.cartItemsService.update(+id, updateCartItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartItemsService.remove(+id);
  }
}
