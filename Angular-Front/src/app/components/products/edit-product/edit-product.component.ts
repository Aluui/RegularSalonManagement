import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product-service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
    selector: 'app-edit-product',
    templateUrl: './edit-product.component.html',
    styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
    productId: string;

    constructor(
        private productService: ProductService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.productId = this.route.snapshot.paramMap.get('id');
    }

    formSubmitted(product: Product) {
        this.productService.updateProduct(product).subscribe((val) => {
            this.router.navigateByUrl('/products');
        });
    }
}
