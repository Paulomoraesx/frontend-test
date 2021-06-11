import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { ClienteModel } from '../clienteModel.model';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  cliente: ClienteModel={
    id: '',
    nome: '',
    idade: ''
  }
  

  constructor(private service: ClienteService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void{
    this.service.findById(this.cliente.id!).subscribe((resposta) =>{
      this.cliente = resposta;
    });
  }
  delete():void{
    this.service.delete(this.cliente.id!).subscribe((resposta) =>{
      this.router.navigate(['clientes'])
      this.service.mensagem('Cliente deletado com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  cancel():void{
    this.router.navigate(['clientes'])
  }

}
