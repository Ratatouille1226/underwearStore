export interface Product {
  id: number;
  store_id: number;
  name: string;
  price: number;
  images: string[];
  category: string;
  attributes: Record<string, any>;
}

export interface CartItem {
  product: Product;
  quantity: number;
}