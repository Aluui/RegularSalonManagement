export class Product {
  id: string;
  name: string;
  sku: string;
  price: string;
  description: string;
  imageUrl: string;

  constructor(
    id: string,
    name: string,
    sku: string,
    price: string,
    description: string,
    imageUrl: string
  ) {
    this.id = id;
    this.name = name;
    this.sku = sku;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl
  }
}
