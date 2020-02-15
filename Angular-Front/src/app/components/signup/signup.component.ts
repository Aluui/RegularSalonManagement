import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup-service/signup.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;

    constructor(private signupService: SignupService, private router: Router) {}

    ngOnInit() {}

    formSubmitted() {
        // console.log(this.name, this.email, this.password, this.phoneNumber);
        this.signupService.signUpUser(
            this.name,
            this.email,
            this.password,
            this.phoneNumber
        );
    }
}
