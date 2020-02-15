import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SignupService {
    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient, private router: Router) {}

    signUpUser(
        name: string,
        email: string,
        password: string,
        phoneNumber: string
    ) {
        const params = new HttpParams({
            fromObject: { name, email, password, phoneNumber }
        });
        this.http.get(this.baseUrl + '/signup', { params }).subscribe(
            arg => {
                if (arg === true) {
                    this.router.navigate(['']);
                }
            },
            error => {
                console.log(error.error.text);
                return error.error.text;
            }
        );
    }
}
