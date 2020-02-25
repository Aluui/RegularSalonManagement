import { Client } from './client';
import { Time } from '@angular/common';
import { Service } from './service';

export class Appointment {
    client: Client;
    dateOfAppointment: Date;
    timeOfAppointment: Time;
    typeOfService: Service;
    durationOfService: Service;
    confirmBy: string;
    Notes: string;

    /**
     *
     */
    constructor(client: Client) {
        client = new Client();
    }
}
