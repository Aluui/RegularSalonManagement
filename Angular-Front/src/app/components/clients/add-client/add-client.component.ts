import { Component, OnInit } from '@angular/core';
import { AddClientService } from 'src/app/services/clients/add-client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  firstName: string;
  lastName: string;
  DOB: string;
  phoneNumber: string;

  constructor(private addClientService: AddClientService) {}

  ngOnInit() {}

  formSubmitted() {
    // console.log(this.firstName, this.lastName, this.DOB, this.phoneNumber);
    this.addClientService.addClient(
      this.firstName,
      this.lastName,
      this.DOB,
      this.phoneNumber
    );
  }
}
