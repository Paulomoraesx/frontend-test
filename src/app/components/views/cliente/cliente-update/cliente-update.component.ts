import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ClienteService } from "../cliente.service";
import { ClienteModel } from "../clienteModel.model";

@Component({
  selector: "app-cliente-update",
  templateUrl: "./cliente-update.component.html",
  styleUrls: ["./cliente-update.component.css"],
})
export class ClienteUpdateComponent implements OnInit {
  cliente: ClienteModel = {
    id: "",
    nome: "",
    idade: "",
  };

  constructor(
    private service: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.cliente.id!).subscribe((resposta) => {
      this.cliente.nome = resposta.nome;
      this.cliente.idade = resposta.idade;
    });
  }
  update(): void {
    this.service.update(this.cliente).subscribe(
      (resposta) => {
        this.router.navigate(["clientes"]);
        this.service.mensagem("Cliente Atualizado com sucesso!");
      },
      (err) => {
        for (let i = 0; i < err.error.campos.length; i++) {
          this.service.mensagem(err.error.campos[i].mensagem);
        }
      }
    );
  }

  cancel(): void {
    this.router.navigate(["clientes"]);
  }
}
