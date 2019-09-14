import { Component, OnInit } from '@angular/core';
import { ViewClientsService } from 'src/app/services/clients/view-clients.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-client',
  templateUrl: './get-client.component.html',
  styleUrls: ['./get-client.component.scss']
})
export class GetClientComponent implements OnInit {
  clients: Observable<any>;

  constructor(private getClientService: ViewClientsService) {
    // this.clients = this.getClientService.getClient();
  }

  ngOnInit() {
    this.clients = this.getClientService.getClient();
  }
}
