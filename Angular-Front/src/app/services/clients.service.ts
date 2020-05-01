import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';

@Injectable({
    providedIn: 'root',
})
export class ClientsService {
    baseUrl = environment.baseUrl;

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

    updateClient(client: Client, id: any) {
        const clientData = {
            client,
            id,
        };

        const headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );

        return this.http
            .post(this.baseUrl + '/clients/edit-client', clientData, {
                headers,
            })
            .subscribe(
                (result) => {
                    // console.log(result);
                    if (result === true) {
                        console.log('Client updated');
                        this.router.navigate(['/clients']);
                    } else {
                        console.log('Client not added');
                        this.router.navigate(['/client-edit/' + id]);
                    }
                },
                (error) => console.log(error)
            );
    }

    getClients() {
        const adminId = localStorage.getItem('adminId');

        const params = new HttpParams({
            fromObject: { adminId },
        });
        return this.http.get<any>(this.baseUrl + '/clients/get-client', {
            params,
        });
    }

    getSingleClient(id: string) {
        const adminId = localStorage.getItem('adminId');
        const params = new HttpParams({
            fromObject: { id, adminId },
        });
        return this.http.get<any>(this.baseUrl + '/clients/get-single-client', {
            params,
        });
    }

    deleteClient(id: string) {
        const clientData = {
            id,
        };

        const headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );

        return this.http
            .post(this.baseUrl + '/clients/delete-client', clientData, {
                headers,
            })
            .subscribe(
                (result) => {
                    // console.log(result);
                    if (result === true) {
                        console.log('Client Deleted');
                        this.router.navigate(['/clients']);
                    } else {
                        console.log('Client not deleted');
                        this.router.navigate(['/client-delete/id:' + id]);
                    }
                },
                (error) => console.log(error)
            );
    }
}
