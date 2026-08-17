import "./style.css";

import { Product } from "./models/Product";
import { fetchProducts } from "./services/apiService";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";
import { handleError } from "./utils/errorHandler";

const productsContainer =

    document.getElementById("products");
async function main(): Promise<void> {
    try {
        const data = await fetchProducts();

        const products = data.slice(0, 6).map(
            product =>
                new Product(
                    product.id,
                    product.title,
                    product.price,
                    product.discountPercentage,
                    product.category,
                    product.thumbnail
                )
        );
        async function main(): Promise<void> {
    try {
        const data = await fetchProducts();

        const products = data.slice(0, 6).map(
            product =>
                new Product(
                    product.id,
                    product.title,
                    product.price,
                    product.discountPercentage,
                    product.category,
                    product.thumbnail
                )
        );
        const finalPrice =
                discountedPrice + tax;

            product.displayDetails();

            console.log(
                `Discount Amount: $${discount.toFixed(2)}`
            );

            console.log(
                `Tax: $${tax.toFixed(2)}`
            );

            console.log(
                `Final Price: $${finalPrice.toFixed(2)}`
            );

            console.log("----------------------");
            
            if (productsContainer) {
                productsContainer.innerHTML += `