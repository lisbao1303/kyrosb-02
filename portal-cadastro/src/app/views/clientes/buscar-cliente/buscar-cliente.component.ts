import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { EnderecoComponent } from 'src/app/components/endereco/endereco.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente, Endereco } from 'src/app/services/models/cliente.model';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.scss']
})
export class BuscarClienteComponent implements OnInit {

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
  enderecosAlternativos : Endereco[] = [];
  enderecoPrincipal : Endereco = {
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
  cpfCliente= "";
  clienteEncontrado = false;
  enderecos: Array<EnderecoComponent> = [];
  @ViewChildren(EnderecoComponent) components: QueryList<EnderecoComponent> = new QueryList<EnderecoComponent>();
  
  constructor(private clienteService: ClienteService,private route: ActivatedRoute, private router: Router) { }

  addEndereco() {
    this.enderecos.push(new EnderecoComponent(this.clienteService, this.router));
  }

  salvarCliente(){
    AppComponent.isCarregando = true;
    this.components.forEach(componentInstance => {
      this.endereco = componentInstance.passaEndereco();
      this.endereco.cpf_cliente = this.cliente.cpf;
      this.cliente.enderecos.push(this.endereco);      
    });
      this.clienteService.atualizaCliente(this.cliente).subscribe(
        res => {
          AppComponent.isCarregando = false;
        if(res) AppComponent.onRefresh()
        },
        error => {
          AppComponent.isCarregando = false;
        },
        () => {
          AppComponent.isCarregando = false;
        }
      )
  }

  removerCliente(){
    AppComponent.isCarregando = true;    
    this.clienteService.deletaCliente(this.cliente.cpf)
    .subscribe(
      res => {
        if(res){
        this.router.navigateByUrl('/cliente/buscar');
        }
        AppComponent.isCarregando = false;
      },
      error => { 
        AppComponent.isCarregando = false;
      },
      () => {
        AppComponent.isCarregando = false;
      }
    ) 
    AppComponent.isCarregando = false;
  }

  carregaCliente(){
    AppComponent.isCarregando = true;
    this.clienteService.clientePorCpf(this.cpfCliente).subscribe(
      res => {
        this.cliente = res
        this.enderecoPrincipal = this.cliente.enderecos.filter(end=>end.is_primario=="S")[0];
        this.enderecosAlternativos = this.cliente.enderecos.filter(end=>end.is_primario!="S");     
        this.clienteEncontrado = true;
        this.router.navigateByUrl('/cliente/'+this.cliente.cpf)
        AppComponent.isCarregando = false;
      },
      error => {
        AppComponent.isCarregando = false;
      },
      () => {
        AppComponent.isCarregando = false;
      }
    )
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cpfCliente = params['cpf'];
      if(this.cpfCliente.length == 11){
    AppComponent.isCarregando = true;
        this.clienteService.clientePorCpf(this.cpfCliente).subscribe(
          res => {
            this.cliente = res
            this.enderecoPrincipal = this.cliente.enderecos.filter(end=>end.is_primario=="S")[0];
            this.enderecosAlternativos = this.cliente.enderecos.filter(end=>end.is_primario!="S");     
            this.clienteEncontrado = true;
    AppComponent.isCarregando = false;

          },
          error => {
            AppComponent.isCarregando = false;
          },
          () => {
            AppComponent.isCarregando = false;
          }
        )
      }
    });
  }

}
