import { CartItem } from "./cart-item";

export interface Cart {
    totalProducts: number;
    products: Record<string, CartItem | undefined>
}
