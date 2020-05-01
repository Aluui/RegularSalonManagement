import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientsService } from 'src/app/services/clients.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-delete-client',
    templateUrl: './delete-client.component.html',
    styleUrls: ['./delete-client.component.scss'],
})
export class DeleteClientComponent implements OnInit {
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
        this.clientService.deleteClient(this.id);
    }
}
