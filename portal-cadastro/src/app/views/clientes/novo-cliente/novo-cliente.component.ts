import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { EnderecoComponent } from 'src/app/components/endereco/endereco.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente, Endereco } from 'src/app/services/models/cliente.model';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.scss']
})
export class NovoClienteComponent implements OnInit {

  cliente: Cliente = {
    cpf: "",
    nome: "",
    data_nascimento: "",
    email: "",
    telefone: "",
    enderecos: [],
  }
  endereco : Endereco = {
    id: "",
    cep: "",
    logradouro: "",
    numero: 0,
    bairro: "",
    cidade: "",
    complemento: "",
    uf: "",
    cpf_cliente: "",
    is_primario: ""
  };

  enderecos: Array<EnderecoComponent> = [];
  @ViewChildren(EnderecoComponent) components: QueryList<EnderecoComponent> = new QueryList<EnderecoComponent>();

  constructor(private clienteService: ClienteService, private router: Router) { }

  addEndereco() {
    this.enderecos.push(new EnderecoComponent(this.clienteService, this.router));
  }
  cadastrarCliente() {
    AppComponent.isCarregando = true;
    this.components.forEach(componentInstance => {
      this.endereco = componentInstance.passaEndereco();
      this.endereco.cpf_cliente = this.cliente.cpf;
      this.cliente.enderecos.push(this.endereco);      
    });
      this.clienteService.novoCliente(this.cliente).subscribe(
        res => {
          this.cliente = res
          this.router.navigateByUrl('/cliente/'+this.cliente.cpf)
        },
        error => {
          AppComponent.isCarregando = false;
        },
        () => {
          AppComponent.isCarregando = false;
        }
      )
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  cpfFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(11),
    Validators.nullValidator
  ]);
  ngOnInit(): void {
  }

}
