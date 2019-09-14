import { Injectable } from '@angular/core';
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

  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }

  login(email: string, password: string) {
    this.authService.login(email, password);
  }

  isAuthenticated() {
    this.authService.isAuthenticated();
  }
}
