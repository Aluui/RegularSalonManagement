import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/entity/product';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.baseUrl;
  products: Product[] = [
    {storeId: "1", name: "Shampoo", description: "Clean through", sku: "theanswerisfingyes", price: "300", imageUrl: "https://niyiadewole.ca"},
    {storeId: "2", name: "Conditioner", description: "Comb through", sku: "theanswerisfingyes", price: "300", imageUrl: "https://niyiadewole.ca"}
  ];

  constructor(private http: HttpClient, private router: Router) { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: string) {

    const params = new HttpParams({
      fromObject: { id }
    });
      this.http.get<any>(this.baseUrl + "/products/get-product", {
        params
        }
      );
  }

  addProduct(
    id: string,
    name: string,
    sku: string,
    price: string,
    description: string,
    imageUrl: string
  ) {
    const params = new HttpParams({
      fromObject: { id, name, sku, price, description, imageUrl }
    });
    // console.log(params);
    console.log(this.baseUrl);

    // https://f7tyl3guqb.execute-api.us-east-2.amazonaws.com/Prod/delivery-api-add-products-function

    this.http.get(this.baseUrl + '/products/add-product', { params }).subscribe(
      result => {
        // console.log(result);
        if (result === true) {
          console.log('Product added');
          // this.router.navigate(['/home']);
        } else {
          console.log('Product not added');
          // this.router.navigate(['/signup']);
        }
      },
      error => console.log(error)
    );
  }

}
