import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
    selector: 'app-add-client',
    templateUrl: './add-client.component.html',
    styleUrls: ['./add-client.component.scss'],
})
export class AddClientComponent implements OnInit {
    newClient = new Client();
    // firstName: string;
    // lastName: string;
    // DOB: string;
    // phoneNumber: string;

    constructor(private addClientService: ClientsService) {}

    ngOnInit() {}

    formSubmitted() {
        this.newClient.getfullName();
        // console.log(this.newClient);
        // console.log(this.firstName, this.lastName, this.DOB, this.phoneNumber);
        this.addClientService.addClient(this.newClient);
    }
}
