import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth-guard.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isLoggedIn$: boolean;
    loggedinUser: string;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            this.isLoggedIn$ = true;
            this.loggedinUser = localStorage.getItem('name');
        }
    }

    // ngOnChanges() {
    //     if (this.authService.isAuthenticated()) {
    //         this.isLoggedIn$ = true;
    //     }
    // }

    signout() {
        this.authService.signOut();
    }
}
