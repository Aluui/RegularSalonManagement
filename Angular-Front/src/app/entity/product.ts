export class Product {
  storeId: string;
  name: string;
  sku: string;
  price: string;
  description: string;
  imageUrl: string;

  constructor(
    storeId: string,
    name: string,
    sku: string,
    price: string,
    description: string,
    imageUrl: string
  ) {
    this.storeId = storeId;
    this.name = name;
    this.sku = sku;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl
  }
}
