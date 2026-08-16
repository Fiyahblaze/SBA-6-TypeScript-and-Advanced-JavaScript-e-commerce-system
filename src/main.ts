import "./style.css";

import { Product } from "./models/Product";
import { fetchProducts } from "./services/apiService";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";
import { handleError } from "./utils/errorHandler";

const productsContainer =
    document.getElementById("products");
