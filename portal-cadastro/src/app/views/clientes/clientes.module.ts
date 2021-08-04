import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciaClientesComponent } from './gerencia-clientes/gerencia-clientes.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { EnderecoComponent } from 'src/app/components/endereco/endereco.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GerenciaClientesComponent,
    NovoClienteComponent,
    BuscarClienteComponent,
    EnderecoComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule
  ]
})
export class ClientesModule { }
