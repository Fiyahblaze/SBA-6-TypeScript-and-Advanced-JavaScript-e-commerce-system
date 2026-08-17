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
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        
                        <img
                            src="${product.thumbnail}"
                            alt="${product.title}"
                            class="w-full h-48 object-cover"
                        >

                        <div class="p-5">

                            <h2 class="text-xl font-bold">
                                ${product.title}
                            </h2>

                            <p class="text-gray-500 capitalize">
                                ${product.category}
                            </p>

                            <p class="mt-3">
                                Original Price:
                                $${product.price.toFixed(2)}
                            </p>

                            <p class="text-green-600">
                                Discount:
                                $${discount.toFixed(2)}
                            </p>

                            <p>
                                Tax:
                                $${tax.toFixed(2)}
                            </p>

                            <p class="mt-2 text-lg font-bold">
                                Final Price:
                                $${finalPrice.toFixed(2)}
                            </p>

                        </div>
                    </div>
                `;
            }
        });
        } catch (error) {
        handleError(error);

        if (productsContainer) {
            productsContainer.innerHTML = `
                <p class="text-red-600 font-bold">
                    Unable to load products.
                </p>
            `;
        }
    }
}

main();
