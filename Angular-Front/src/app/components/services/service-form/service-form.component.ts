import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { ServiceService } from 'src/app/services/service.service';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-service-form',
    templateUrl: './service-form.component.html',
    styleUrls: ['./service-form.component.scss'],
})
export class ServiceFormComponent implements OnInit {
    @Input() serviceId: string;
    @Input() controlsDisabled = false;
    @Input() readonly = false;
    @Output() onSubmit = new EventEmitter<Service>();

    model = new Service();

    constructor(private service: ServiceService) {}

    ngOnInit() {
        if (this.serviceId != null) {
            this.service
                .getSingleService(this.serviceId)
                .pipe(take(1))
                .subscribe((service) => (this.model = service));
        }
    }

    formSubmitted() {
        this.onSubmit.emit(this.model);
    }
}
