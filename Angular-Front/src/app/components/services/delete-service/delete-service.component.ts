import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { ServiceService } from 'src/app/services/service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-delete-service',
    templateUrl: './delete-service.component.html',
    styleUrls: ['./delete-service.component.scss'],
})
export class DeleteServiceComponent implements OnInit {
    serviceId: string;

    constructor(
        private service: ServiceService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.serviceId = this.route.snapshot.paramMap.get('id');
    }

    formSubmitted(service: Service) {
        this.service.deleteService(service).subscribe((val) => {
            this.router.navigateByUrl('/services');
        });
    }
}
