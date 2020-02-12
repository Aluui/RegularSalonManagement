import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    baseUrl = environment.baseUrl;
    authToken: string;
    // uidKey = "userid";

    constructor(private http: HttpClient, private router: Router) {}

    isAuthenticated() {
        return Boolean(localStorage.getItem('authToken'));
    }

    login(email: string, password: string) {
        const params = new HttpParams({
            fromObject: { email, password }
        });

        return this.http.get<any>(this.baseUrl + '/login', { params });
    }

    signOut() {
        this.http.get<any>(this.baseUrl + '/signout').subscribe(
            arg => {
                // console.log(arg);
                if (arg === true) {
                    // console.log(arg);
                    localStorage.clear();
                    console.log('user logged out');
                    this.router.navigate(['']);
                }
            },
            error => console.log(error)
        );
    }

    resetPassword(email: string) {
        const params = new HttpParams({
            fromObject: { email }
        });

        this.http
            .get<any>(this.baseUrl + '/forgot-password', {
                params
            })
            .subscribe(
                result => {
                    // console.log(message);
                    if (result === true) {
                        return true;
                    } else {
                        console.log(result.error.text);
                    }
                },
                error => console.log(error)
            );
    }
}
