import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddClientService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) {}

  addClient(
    firstName: string,
    lastName: string,
    DOB: string,
    phoneNumber: string
  ) {
    const params = new HttpParams({
      fromObject: { firstName, lastName, DOB, phoneNumber }
    });
    // console.log(params);

    this.http.get(this.baseUrl + '/clients/add-client', { params }).subscribe(
      result => {
        // console.log(result);
        if (result === true) {
          console.log('Client added');
          // this.router.navigate(['/home']);
        } else {
          console.log('Client not added');
          // this.router.navigate(['/signup']);
        }
      },
      error => console.log(error)
    );
  }
}
