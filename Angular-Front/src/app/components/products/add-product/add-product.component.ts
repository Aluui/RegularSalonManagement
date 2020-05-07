import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product-service/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
    constructor(
        private productService: ProductService,
        private router: Router
    ) {}

    ngOnInit() {}

    formSubmitted(product: Product) {
        this.productService.addProduct(product).subscribe((val) => {
            this.router.navigateByUrl('/products');
        });
        // this.productService.addProduct

        // );
    }
}
