import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoClienteComponent } from './views/clientes/novo-cliente/novo-cliente.component';
import { BuscarClienteComponent } from './views/clientes/buscar-cliente/buscar-cliente.component';
import { GerenciaClientesComponent } from './views/clientes/gerencia-clientes/gerencia-clientes.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'novocliente', component: NovoClienteComponent},
  {path: 'cliente/:cpf', component: BuscarClienteComponent},
  {path: 'gerenciador', component: GerenciaClientesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
