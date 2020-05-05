import { Client } from './client.model';
import { Time } from '@angular/common';
import { Service } from './service.model';

export class Appointment {
    clientId: string;
    adminId = localStorage.getItem('adminId');
    dateOfAppointment: Date;
    timeOfAppointment: Time;
    typeOfService: Service;
    durationOfService: Service;
    confirmBy: string;
    Notes: string;


    // constructor(
    //     public client: Client,
    //     public dateOfAppointment: Date,
    //     public timeOfAppointment: Time,
    //     public typeOfService?: Service,
    //     public durationOfService?: Service,
    //     public confirmBy?: string,
    //     public notes?: string
    // ) {}
}
