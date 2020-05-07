import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {}

    getProducts() {
        const adminId = localStorage.getItem('adminId');

        const params = new HttpParams({
            fromObject: { adminId },
        });

        return this.http.get<any>(this.baseUrl + '/products/get-products', {
            params,
        });
    }

    getSingleProduct(id: string) {
        const adminId = localStorage.getItem('adminId');

        const params = new HttpParams({
            fromObject: { id, adminId },
        });
        return this.http.get<any>(
            this.baseUrl + '/products/get-single-product',
            {
                params,
            }
        );
    }

    addProduct(product: Product) {
        const productData = {
            product,
        };

        const headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );

        return this.http.post(
            this.baseUrl + '/products/add-product',
            productData,
            {
                headers,
            }
        );
    }

    updateProduct(product: Product) {
        const productData = {
            product,
        };

        const headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );

        return this.http.post(
            this.baseUrl + '/products/update-product',
            productData,
            {
                headers,
            }
        );
    }

    deleteProduct(product: Product) {
        const productData = {
            product,
        };

        const headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );

        return this.http.post(
            this.baseUrl + '/products/delete-product',
            productData,
            {
                headers,
            }
        );
    }
}
