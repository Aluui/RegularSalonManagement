import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  storeId: string;
  name: string;
  sku: string;
  price: string;
  description: string;
  imageUrl: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  formSubmitted() {

    this.productService.addProduct(
      this.storeId,
      this.name,
      this.sku,
      this.price,
      this.description,
      this.imageUrl
    );
  }

}
