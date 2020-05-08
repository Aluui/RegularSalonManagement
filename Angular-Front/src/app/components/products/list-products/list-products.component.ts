import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Observable, of, from } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Component({
    selector: 'app-list-products',
    templateUrl: './list-products.component.html',
    styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
    products: Observable<Product>;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.products = this.productService.getProducts();
        // console.log(this.services);
    }
}
