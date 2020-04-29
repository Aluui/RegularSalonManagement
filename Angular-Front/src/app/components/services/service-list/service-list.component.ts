import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { ServiceService } from 'src/app/services/service.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-service-list',
    templateUrl: './service-list.component.html',
    styleUrls: ['./service-list.component.scss'],
})
export class ServiceListComponent implements OnInit {
    services: Observable<Service>;

    constructor(private service: ServiceService) {}

    ngOnInit() {
        this.services = this.service.getServices();
        // console.log(this.services);
    }
}
