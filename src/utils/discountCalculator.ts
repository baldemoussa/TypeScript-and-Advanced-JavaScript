import Product from "../models/Product";

export default function calculateDiscount(product: Product): number {
    const discountedPrice = product.price * product.discountPercentage/100;
    return Number(discountedPrice.toFixed(2));
}