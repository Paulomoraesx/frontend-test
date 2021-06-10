import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ClienteModel } from "./clienteModel.model";

@Injectable({
  providedIn: "root",
})
export class ClienteService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<ClienteModel[]>{
    const url = `${this.baseUrl}clientes`
    return this.http.get<ClienteModel[]>(url)
  }
}
