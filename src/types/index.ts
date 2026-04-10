export interface Product {
    id: number;
    name: string;
    price: number;
    images: string[];
    category: string;
    attributes: Record<string, string | string[]>;
}