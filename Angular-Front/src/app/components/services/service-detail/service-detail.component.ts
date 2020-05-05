import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-service-detail',
    templateUrl: './service-detail.component.html',
    styleUrls: ['./service-detail.component.scss'],
})
export class ServiceDetailComponent implements OnInit {
    serviceId: string;

    constructor(
        private service: ServiceService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.serviceId = this.route.snapshot.paramMap.get('id');
    }
}
