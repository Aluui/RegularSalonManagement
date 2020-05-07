import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product-service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
    selector: 'app-delete-product',
    templateUrl: './delete-product.component.html',
    styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent implements OnInit {
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
        this.productService.deleteProduct(product).subscribe((val) => {
            this.router.navigateByUrl('/products');
        });
    }
}
