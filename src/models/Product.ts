export class Product {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    category: string;
    thumbnail: string;

    constructor(
        id: number,
        title: string,
        price: number,
        discountPercentage: number,
        category: string,
        thumbnail: string
    ) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.category = category;
        this.thumbnail = thumbnail;
    }

    displayDetails(): void {
        console.log(`Product: ${this.title}`);
        console.log(`Category: ${this.category}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
        console.log(`Discount: ${this.discountPercentage}%`);
    }

    getPriceWithDiscount(): number {
        const discount =
            this.price * (this.discountPercentage / 100);

        return this.price - discount;
    }
}