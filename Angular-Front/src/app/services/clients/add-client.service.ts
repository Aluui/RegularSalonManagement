import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Client } from 'src/app/models/client';

@Injectable({
    providedIn: 'root'
})
export class AddClientService {
    baseUrl = environment.baseUrl;

    // newClient = new Client();

    constructor(private http: HttpClient, private router: Router) {}

    addClient(client: Client) {
        // console.log(client);
        const adminId = localStorage.getItem('adminId');

        const clientData = {
            client,
            adminId
        };

        const headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );
        // this.newClient = client;
        // const params = new HttpParams({
        //     fromObject: { client.firstName.ToString, newClient.lastName, this.newClient.birthday, nwphoneNumber }
        // });
        // console.log(params);

        this.http
            .post(this.baseUrl + '/clients/add-client', clientData, {
                headers
            })
            .subscribe(
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
