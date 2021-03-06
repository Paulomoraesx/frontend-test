import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ClienteModel } from "./clienteModel.model";

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<ClienteModel[]> {
    const url = `${this.baseUrl}clientes`;
    return this.http.get<ClienteModel[]>(url);
  }

  findById(id: String): Observable<ClienteModel> {
    const url = `${this.baseUrl}clientes/${id}`;
    return this.http.get<ClienteModel>(url);
  }

  create(cliente: ClienteModel): Observable<ClienteModel> {
    const url = `${this.baseUrl}clientes`;
    return this.http.post<ClienteModel>(url, cliente);
  }
  update(cliente: ClienteModel): Observable<void> {
    const url = `${this.baseUrl}clientes`;
    return this.http.put<void>(url, cliente);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}clientes/${id}`;
    return this.http.delete<void>(url);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
    });
  }
}
