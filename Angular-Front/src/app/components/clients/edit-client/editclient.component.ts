import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-editclient',
    templateUrl: './editclient.component.html',
    styleUrls: ['./editclient.component.scss'],
})
export class EditclientComponent implements OnInit {
    client: Client;
    id: any;

    constructor(
        private clientService: ClientsService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.clientService
            .getSingleClient(this.id)
            .pipe()
            .subscribe((val) => {
                this.client = val;
            });
    }

    formSubmitted() {
        this.client.getfullName();

        this.clientService.updateClient(this.client, this.id);
    }
}
