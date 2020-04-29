import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/models/appointment.model';
import { Client } from 'src/app/models/client.model';
import { ClientsService } from 'src/app/services/clients/clients.service';

@Component({
    selector: 'app-view-schedule',
    templateUrl: './view-schedule.component.html',
    styleUrls: ['./view-schedule.component.scss'],
})
export class ViewScheduleComponent implements OnInit {
    appointments: Observable<Appointment>;
    clientId: string;

    constructor(
        private appt: ScheduleService,
        private getClient: ClientsService
    ) {}

    ngOnInit() {
        this.appointments = this.appt.getAppts();
        
        // this.client = this.getClient.getSingleClient(this.appointments.c)
    }
}
