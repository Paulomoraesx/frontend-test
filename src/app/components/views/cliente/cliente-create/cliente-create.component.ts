import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ClienteService } from "../cliente.service";
import { ClienteModel } from "../clienteModel.model";

@Component({
  selector: "app-cliente-create",
  templateUrl: "./cliente-create.component.html",
  styleUrls: ["./cliente-create.component.css"],
})
export class ClienteCreateComponent implements OnInit {
  cliente: ClienteModel = {
    nome: "",
    idade: "",
  };

  constructor(private service: ClienteService, private router: Router) {}

  ngOnInit(): void {}

  create(): void {
    this.service.create(this.cliente).subscribe((resposta) => {
      this.router.navigate(['clientes'])
      this.service.mensagem('Cliente cadastrado com sucesso!');
    }, err => {
      console.log(err.error)
      for(let i = 0; i < err.error.campos.length; i++){
        this.service.mensagem(err.error.campos[i].mensagem)
      }
    });
  }
}
