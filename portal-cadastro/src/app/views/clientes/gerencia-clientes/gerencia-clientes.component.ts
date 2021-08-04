import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from 'src/app/app.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/services/models/cliente.model';

@Component({
  selector: 'app-gerencia-clientes',
  templateUrl: './gerencia-clientes.component.html',
  styleUrls: ['./gerencia-clientes.component.scss']
})
export class GerenciaClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  dataSource: MatTableDataSource<Cliente>;
  displayedColumns: string[] = ['cpf', 'nome', 'data_nascimento', 'email', 'telefone', 'acoes'];
  constructor(private clienteService: ClienteService) {
    this.dataSource = new MatTableDataSource(this.clientes);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnInit(): void {
    AppComponent.isCarregando = true;
    this.clienteService.todosClientes()
      .subscribe(
        res => {
          this.clientes = res
        },
        error => { },
        () => {
          AppComponent.isCarregando = false;
        }
      )      

  }
}
