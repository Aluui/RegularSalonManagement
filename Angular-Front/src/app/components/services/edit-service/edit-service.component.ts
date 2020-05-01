import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { ServiceService } from 'src/app/services/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-edit-service',
    templateUrl: './edit-service.component.html',
    styleUrls: ['./edit-service.component.scss'],
})
export class EditServiceComponent implements OnInit {
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
        this.service.updateService(service).subscribe((val) => {
            this.router.navigateByUrl('/services');
        });
    }
}
