import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    baseUrl = environment.baseUrl;
    private authToken: string;
    private uid: string;

    constructor(private router: Router, private authService: AuthService) {}

    login(email: string, password: string) {
        this.authService.login(email, password).subscribe({
            next(res) {
                // console.log(res.user);
                this.authToken = res.user.stsTokenManager.accessToken;
                this.uid = res.user.uid;
                this.name = res.user.displayName;
                // onsole.log(res.user);
                localStorage.setItem('authToken', this.authToken);
                localStorage.setItem('userId', this.uid);
                localStorage.setItem('name', this.name);
                // this.router.navigate(['/home']);
            },
            error(res) {
                // console.log(err.error.text);
                alert(res.error.text);
            },
            complete: () => {
                this.router.navigate(['/home']);
            }
        });

        // this.authService.login(email, password).subscribe(userInfo => {
        //     // console.log(userInfo);

        //     this.authToken = userInfo.user.stsTokenManager.accessToken;

        //     localStorage.setItem('authToken', this.authToken);

        //     // console.log(localStorage.getItem('authToken'));
        //     // console.log(this.authToken);
        //     return Boolean(this.authToken);
        // });
    }
}
