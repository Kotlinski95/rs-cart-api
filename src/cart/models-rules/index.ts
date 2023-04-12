import { Carts } from 'src/database/entities/carts.entity';
import { Cart, CartItem } from '../models';

/**
 * @param {Cart} cart
 * @returns {number}
 */
export function calculateCartTotal(carts: Carts): number {
  return carts
    ? carts.Cart_items.reduce((acc: number, Cart_items) => {
        return (acc += 1 * Cart_items.count);
      }, 0)
    : 0;
}