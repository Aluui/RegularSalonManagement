import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Client } from 'src/app/models/client.model';

@Injectable({
    providedIn: 'root',
})
export class AddClientService {
    baseUrl = environment.baseUrl;

    // newClient = new Client();

    constructor(private http: HttpClient, private router: Router) {}

    addClient(client: Client) {
        // console.log(client);
        // const adminId = localStorage.getItem('adminId');

        const clientData = {
            client,
        };

        const headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );

        this.http
            .post(this.baseUrl + '/clients/add-client', clientData, {
                headers,
            })
            .subscribe(
                (result) => {
                    // console.log(result);
                    if (result === true) {
                        console.log('Client added');
                        this.router.navigate(['/home']);
                    } else {
                        console.log('Client not added');
                        this.router.navigate(['/add-client']);
                    }
                },
                (error) => console.log(error)
            );
    }
}
