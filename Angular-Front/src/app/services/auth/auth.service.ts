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

    // setLocalStorage(uid: string) {
    //   return localStorage.setItem(this.uidKey, uid);
    // }

    // getLocalStorage() {
    //   console.log(this.uidKey);
    //   return localStorage.getItem(this.uidKey);
    // }

    // clearLocalStorage() {
    //   return localStorage.clear();
    // }

    // login(email: string, password: string) {
    //   const authUID = this.getLocalStorage();
    //   // console.log("This will display the auth uid: ", authUID);

    //   const params = new HttpParams({
    //     fromObject: { email, password }
    //   });

    //   if (authUID) {
    //     this.router.navigate(["/home"]);
    //     // console.log(authUID);
    //     return;
    //   }

    //   this.http
    //     .get<any>(this.baseUrl + "/login", { params })
    //     .subscribe({
    //       next(arg) {
    //         // console.log(arg);

    //         const authToken = arg.stsTokenManager.accessToken;
    //         console.log(arg);
    //         console.log(authToken);
    //         console.log(localStorage.getItem(this.uidKey));
    //         return localStorage.setItem(this.uidKey, authToken);

    //         // console.log(this.authToken);
    //       },
    //       error: error => console.log(error),

    //       complete: () => {
    //         console.log(this.authToken);
    //         console.log(localStorage.getItem(this.uidKey));
    //         if (localStorage.getItem(this.uidKey) !== null) {
    //           this.router.navigate(["/home"]);
    //         } else {
    //           this.router.navigate(["/signup"]);
    //         }
    //       }
    //     });
    // }

    // login function should check if user exists based on username and password and return true
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
}
