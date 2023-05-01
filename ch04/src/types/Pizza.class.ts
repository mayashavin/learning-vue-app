export class Pizza {
  title: string;
  description: string;
  image: string;
  quantity: number;
  price: number;

  constructor(title: string, description: string, image: string, quantity: number, price: number) {
    this.title = title
    this.description = description
    this.image = image
    this.quantity = quantity
    this.price = price
  }
}