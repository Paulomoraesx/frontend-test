import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { ClienteModel } from '../clienteModel.model';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes: ClienteModel[] = []
  
  displayedColumns: string[] = ['id', 'nome', 'idade', 'acoes'];

  constructor(private service: ClienteService, private router:Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.clientes = resposta;
    })
  }
  navegarParaClienteCreate(){
    this.router.navigate(["clientes/create"])

  }

}
