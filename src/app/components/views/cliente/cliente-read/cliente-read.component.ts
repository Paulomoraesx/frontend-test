import { Component, OnInit } from '@angular/core';
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

  constructor(private service: ClienteService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.clientes = resposta;
    })
  }

}
