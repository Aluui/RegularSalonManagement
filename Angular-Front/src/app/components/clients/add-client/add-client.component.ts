import { Component, OnInit } from '@angular/core';
import { AddClientService } from 'src/app/services/clients/add-client.service';
import { Client } from 'src/app/models/client.model';

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

    constructor(private addClientService: AddClientService) {}

    ngOnInit() {}

    formSubmitted() {
        this.newClient.getfullName();
        // console.log(this.newClient);
        // console.log(this.firstName, this.lastName, this.DOB, this.phoneNumber);
        this.addClientService.addClient(this.newClient);
    }
}
