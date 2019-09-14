import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  private authToken: string;
  private uidKey = 'loggedInID';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    const authUID = this.getLocalStorage();
    // console.log('This will display the auth uid: ', authUID);

    const params = new HttpParams({
      fromObject: { email, password }
    });
    if (authUID) {
      this.router.navigate(['/home']);
      return;
    }

    this.http.get<any>(this.baseUrl + '/login', { params }).subscribe(
      arg => {
        // console.log(arg);
        if (arg != null) {
          this.authToken = arg.stsTokenManager.accessToken;
          this.setLocalStorage(arg.uid);
          // console.log(this.authToken);
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/signup']);
        }
      },
      error => console.log(error)
    );
  }

  isAuthenticated() {
    return Boolean(this.getLocalStorage());
  }

  signOut() {
    this.http.get<any>(this.baseUrl + '/signout').subscribe(
      arg => {
        // console.log(arg);
        if (arg === true) {
          // console.log(this.authToken);
          console.log('user logged out');

          this.clearLocalStorage();
          this.router.navigate(['']);
        } else {
          alert('Error logging out. Please try again.');
        }
      },
      error => console.log(error)
    );
  }

  setLocalStorage(uid: string) {
    localStorage.setItem(this.uidKey, uid);
  }

  getLocalStorage() {
    return localStorage.getItem(this.uidKey);
  }

  clearLocalStorage() {
    return localStorage.clear();
  }
}
