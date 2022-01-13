import Product from "./product.model";

export default interface CartItem {
  product: Product;
  quantity: number
}
