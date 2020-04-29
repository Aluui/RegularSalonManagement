export class Product {
  id: string;
  Name: string;
  sku: string;
  price: string;
  description: string;
  imageUrl: string;

  constructor(
    id: string,
    Name: string,
    sku: string,
    price: string,
    description: string,
    imageUrl: string
  ) {
    this.id = id;
    this.Name = Name;
    this.sku = sku;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl
  }
}
