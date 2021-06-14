import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreateComponent } from './components/views/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/views/cliente/cliente-delete/cliente-delete.component';
import { ClienteReadComponent } from './components/views/cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './components/views/cliente/cliente-update/cliente-update.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'clientes',
    component: ClienteReadComponent
  },
  {
    path: 'clientes/create',
    component: ClienteCreateComponent
  },
  {
    path: 'clientes/delete/:id',
    component: ClienteDeleteComponent
  },
  {
    path: 'clientes/update/:id',
    component: ClienteUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
