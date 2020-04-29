import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Appointment } from '../models/appointment.model';

@Injectable({
    providedIn: 'root',
})
export class ScheduleService {
    baseUrl = environment.baseUrl;
    constructor(private http: HttpClient, private router: Router) {}

    // Adding a new appointment to db
    addAppointment(appt: Appointment) {
        // const adminId = localStorage.getItem('adminId');

        const apptData = {
            appt,
        };

        const headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );

        this.http
            .post(this.baseUrl + '/add-appointment', apptData, {
                headers,
            })
            .subscribe(
                (result) => {
                    // console.log(result);
                    if (result === true) {
                        console.log('Appointment added');
                        this.router.navigate(['/schedule']);
                    } else {
                        console.log('Appointment not added');
                        this.router.navigate(['/add-appointment']);
                    }
                },
                (error) => console.log(error)
            );
    }

    // Getting All Appointments based on logged in User
    getAppts() {
        const adminId = localStorage.getItem('adminId');

        const params = new HttpParams({
            fromObject: { adminId },
        });
        return this.http.get<any>(this.baseUrl + '/get-appointments', {
            params,
        });
    }
}
