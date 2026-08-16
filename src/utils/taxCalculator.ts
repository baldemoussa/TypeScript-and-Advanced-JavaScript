import Product from "../models/Product";

export default function calculateTax(product: Product, taxRate: number = 4.75): number {
    const taxAmount = product.price * (product.category.toLowerCase()==='groceries' ? 3 : taxRate) / 100;
    return Number(taxAmount.toFixed(2));
}
