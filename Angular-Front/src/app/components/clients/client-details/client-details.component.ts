import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Client } from 'src/app/models/client.model';

@Component({
    selector: 'app-client-details',
    templateUrl: './client-details.component.html',
    styleUrls: ['./client-details.component.scss'],
})
export class ClientDetailsComponent implements OnInit {
    client: Client;

    constructor(
        private getClientService: ClientsService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        // console.log(id);

        this.getClientService
            .getSingleClient(id)
            .pipe()
            .subscribe((val) => {
                this.client = val;
            });
    }
}
