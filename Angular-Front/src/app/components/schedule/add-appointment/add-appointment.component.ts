import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.model';
import { Client } from 'src/app/models/client.model';
import { ClientsService } from 'src/app/services/clients/clients.service';
import { Observable } from 'rxjs';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
    selector: 'app-add-appointment',
    templateUrl: './add-appointment.component.html',
    styleUrls: ['./add-appointment.component.scss'],
})
export class AddAppointmentComponent implements OnInit {
    // client: Client;
    clients: Observable<Client>;
    // client: Client;
    min = new Date().getDate();

    appointment = new Appointment();

    constructor(
        private getClientService: ClientsService,
        private addApptService: ScheduleService
    ) {}

    ngOnInit() {
        this.clients = this.getClientService.getClients();
        // console.log(this.clients);
    }

    formSubmitted() {
        // this.appointment.client = this.client;
        // console.log(this.appointment);
        this.addApptService.addAppointment(this.appointment);
    }
}
