import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login-service/login.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    result: boolean;

    constructor(
        private loginService: LoginService,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['/home']);
        } else {
            console.log('User is not authenticated');
        }
    }

    formSubmitted() {
        // console.log(this.email, this.password);
        this.loginService.login(this.email, this.password);
        // if (this.authService.isAuthenticated()) {
        //     this.router.navigate(['/home']);
        // } else {
        //     alert('login failed');
        // }
        // console.log(result);
    }
}
