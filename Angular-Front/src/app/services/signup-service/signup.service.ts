import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  signUpUser(
    name: string,
    email: string,
    password: string,
    phoneNumber: string
  ) {
    const params = new HttpParams({
      fromObject: { name, email, password, phoneNumber }
    });
    this.http
      .get(this.baseUrl + '/signup', { params })
      .subscribe(arg => console.log(arg));
  }
}
