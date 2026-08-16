import { AppError } from "../utils/errorHandler";

export interface ApiProduct {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    category: string;
    thumbnail: string;
}