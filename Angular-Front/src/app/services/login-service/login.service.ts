import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = environment.baseUrl;
  private authToken: string;
  private uid: string;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    const params = new HttpParams({
      fromObject: { email, password }
    });
    this.http.get<any>(this.baseUrl + '/login', { params }).subscribe(
      arg => {
        console.log(arg);
        if (arg != null) {
          this.authToken = arg.stsTokenManager.accessToken;
          this.uid = arg.uid;
          // console.log(this.authToken);
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/signup']);
        }
      },
      error => console.log(error)
    );
  }
}
