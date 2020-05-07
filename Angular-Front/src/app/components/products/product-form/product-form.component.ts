import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product-service/product.service';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
    @Input() productId: string;
    @Input() controlsDisabled = false;
    @Input() readonly = false;
    @Output() onSubmit = new EventEmitter<Product>();

    model = new Product();

    constructor(private productService: ProductService) {}

    ngOnInit() {
        if (this.productId != null) {
            this.productService
                .getSingleProduct(this.productId)
                .pipe(take(1))
                .subscribe((product) => (this.model = product));
        }
    }

    formSubmitted() {
        this.onSubmit.emit(this.model);
    }
}
