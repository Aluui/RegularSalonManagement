import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ClientsService {
    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {}

    getClients() {
        const adminId = localStorage.getItem('adminId');

        const params = new HttpParams({
            fromObject: { adminId }
        });
        return this.http.get<any>(this.baseUrl + '/clients/get-client', {
            params
        });
    }

    getSingleClient(id: string) {
        const adminId = localStorage.getItem('adminId');
        const params = new HttpParams({
            fromObject: { id, adminId }
        });
        return this.http.get<any>(this.baseUrl + '/clients/get-single-client', {
            params
        });
    }
}
