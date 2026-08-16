
// Create custom types for some Product properties
export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Dimension {
  width: number;
  height: number;
  depth: number;
}

export interface ProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export default class Product {
  private _id: number;
  private _title: string;
  private _description: string;
  private _category: string;
  private _price: number;
  private _discountPercentage: number;
  private _rating: number;
  private _stock: number;
  private _tags: string[];
  private _brand: string;
  private _sku: string;
  private _weight: number;
  private _dimensions: Dimension;
  private _warrantyInformation: string;
  private _shippingInformation: string;
  private _availabilityStatus: string;
  private _reviews: Review[];
  private _returnPolicy: string;
  private _minimumOrderQuantity: number;
  private _meta: ProductMeta;
  private _thumbnail: string;
  private _images: string[];

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand: string,
    sku: string,
    weight: number,
    dimensions: Dimension,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: Review[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: ProductMeta,
    thumbnail: string,
    images: string[]
  ) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._category = category;
    this._price = price;
    this._discountPercentage = discountPercentage;
    this._rating = rating;
    this._stock = stock;
    this._tags = tags;
    this._brand = brand;
    this._sku = sku;
    this._weight = weight;
    this._dimensions = dimensions;
    this._warrantyInformation = warrantyInformation;
    this._shippingInformation = shippingInformation;
    this._availabilityStatus = availabilityStatus;
    this._reviews = reviews;
    this._returnPolicy = returnPolicy;
    this._minimumOrderQuantity = minimumOrderQuantity;
    this._meta = meta;
    this._thumbnail = thumbnail;
    this._images = images;
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get category(): string {
    return this._category;
  }

  get price(): number {
    return this._price;
  }

  get discountPercentage(): number {
    return this._discountPercentage;
  }

  get rating(): number {
    return this._rating;
  }

  get stock(): number {
    return this._stock;
  }

  get tags(): string[] {
    return this._tags;
  }

  get brand(): string {
    return this._brand;
  }

  get sku(): string {
    return this._sku;
  }

  get weight(): number {
    return this._weight;
  }

  get dimensions(): Dimension {
    return this._dimensions;
  }

  get warrantyInformation(): string {
    return this._warrantyInformation;
  }

  get shippingInformation(): string {
    return this._shippingInformation;
  }

  get availabilityStatus(): string {
    return this._availabilityStatus;
  }

  get reviews(): Review[] {
    return this._reviews;
  }

  get returnPolicy(): string {
    return this._returnPolicy;
  }

  get minimumOrderQuantity(): number {
    return this._minimumOrderQuantity;
  }

  get meta(): ProductMeta {
    return this._meta;
  }

  get thumbnail(): string {
    return this._thumbnail;
  }

  get images(): string[] {
    return this._images;
  }

  displayDetails(): string {
    const details = `ID: ${this.id}, Title: ${this.title}, Description: ${this.description}, 
    Category: ${this.category}, Price: $${this.price.toFixed(2)}, Discount: ${this.discountPercentage}%,
    Rating: ${this.rating}, Stock: ${this.stock}, Tags: ${this.tags}, Brand: ${this.brand},
    SKU: ${this.sku}, Weight: ${this.weight}, Dimensions: ${this.dimensions}, Warranty Information: ${this.warrantyInformation},
    Shipping Information: ${this.shippingInformation}, Availability Status: ${this.availabilityStatus},
    Reviews: ${this.reviews}, Return Policy: ${this.returnPolicy}, Minimum Order Quantity: ${this.minimumOrderQuantity},
    Meta: ${this.meta}, Thumbnail: ${this.thumbnail}, Images: ${this.images}`; 
        return details
  };

  getPriceWithDiscount():number {
    const discountedPrice = this.price * (1 - this.discountPercentage / 100);
    return Number(discountedPrice.toFixed(2));
  };
}