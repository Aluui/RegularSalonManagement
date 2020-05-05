import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-service',
    templateUrl: './new-service.component.html',
    styleUrls: ['./new-service.component.scss'],
})
export class NewServiceComponent implements OnInit {
    constructor(private service: ServiceService, private router: Router) {}

    ngOnInit() {}

    formSubmitted(service: Service) {
        this.service.addService(service).subscribe((val) => {
            this.router.navigateByUrl('/services');
        });
    }
}
