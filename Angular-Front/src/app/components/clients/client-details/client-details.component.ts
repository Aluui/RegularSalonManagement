import { Component, OnInit } from "@angular/core";
import { ClientsService } from "src/app/services/clients/clients.service";
import { Observable } from "rxjs";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-client-details",
  templateUrl: "./client-details.component.html",
  styleUrls: ["./client-details.component.scss"]
})
export class ClientDetailsComponent implements OnInit {
  client: Observable<any>;
  id: any;

  constructor(
    private getClientService: ClientsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);

    this.client = this.getClientService.getSingleClient(this.id);
    //.subscribe(client => (this.client = client));
    // this.client = this.route.params.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.getClientService.getClient(params.get('id'))
    //   )
    // );

    console.log(this.client);
  }
}
