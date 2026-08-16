import { AppError } from "../utils/errorHandler";

export interface ApiProduct {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    category: string;
    thumbnail: string;
}
interface ProductResponse {
    products: ApiProduct[];
}
export async function fetchProducts(): Promise<ApiProduct[]> {
    try {
        const response = await fetch(
            "https://dummyjson.com/products"
        );