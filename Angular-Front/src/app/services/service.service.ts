import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Service } from '../models/service.model';

@Injectable({
    providedIn: 'root',
})
export class ServiceService {
    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {}

    getServices() {
        const adminId = localStorage.getItem('adminId');

        const params = new HttpParams({
            fromObject: { adminId },
        });
        return this.http.get<any>(this.baseUrl + '/services/get-service', {
            params,
        });
    }

    getSingleService(id: string) {
        const adminId = localStorage.getItem('adminId');
        const params = new HttpParams({
            fromObject: { id, adminId },
        });
        return this.http.get<any>(
            this.baseUrl + '/services/get-single-service',
            {
                params,
            }
        );
    }
    addService(service: Service) {
        const serviceData = {
            service,
        };

        const headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );

        return this.http.post(
            this.baseUrl + '/services/add-service',
            serviceData,
            {
                headers,
            }
        );
        // .subscribe(
        //     (result) => {
        //         // console.log(result);
        //         if (result === true) {
        //             console.log('Client added');
        //             this.router.navigate(['/home']);
        //         } else {
        //             console.log('Client not added');
        //             this.router.navigate(['/add-service']);
        //         }
        //     },
        //     (error) => console.log(error)
        // );
    }
}
