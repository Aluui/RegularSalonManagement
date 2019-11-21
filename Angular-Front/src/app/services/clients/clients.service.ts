import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ClientsService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getClients() {
    return this.http.get<any>(this.baseUrl + "/clients/get-client");
  }

  getSingleClient(id: string) {
    const params = new HttpParams({
      fromObject: { id }
    });
    return this.http.get<any>(this.baseUrl + "/clients/get-single-client", {
      params
    });
  }
}
