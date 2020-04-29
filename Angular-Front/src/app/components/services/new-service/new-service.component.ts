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
    newService = new Service();
    // firstName: string;
    // lastName: string;
    // DOB: string;
    // phoneNumber: string;

    constructor(private service: ServiceService, private router: Router) {}

    ngOnInit() {}

    formSubmitted() {
        // this.newService.getfullName();
        // console.log(this.newService);
        // console.log(this.firstName, this.lastName, this.DOB, this.phoneNumber);
        this.service.addService(this.newService).subscribe((val) => {
            this.router.navigateByUrl('/services');
        });
    }
}
