import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients/clients.service';
import { Observable } from 'rxjs';
import { Client } from 'src/app/entity/client';

@Component({
    selector: 'app-list-clients',
    templateUrl: './list-clients.component.html',
    styleUrls: ['./list-clients.component.scss'],
})
export class ListClientsComponent implements OnInit {
    clients: Observable<any>;
    // client: Client;

    constructor(private getClientService: ClientsService) {
        // this.clients = this.getClientService.getClient();
    }

    ngOnInit() {
        this.clients = this.getClientService.getClients();
        // console.log(this.clients);
    }
}
