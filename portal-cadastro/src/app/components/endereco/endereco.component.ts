import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { Endereco } from 'src/app/services/models/cliente.model';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  @Input() endereco : Endereco = {
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
  
  @Input() tipo = '';

titulo ='';
eAlternativo = true;
eAlternativoPrincipal = true;
naoRemovido = true;

  enderecoPorCep(){
    AppComponent.isCarregando = true;
    this.clienteService.enderecoPorCep(this.endereco.cep).subscribe(
      res => {
        this.endereco.bairro = res.bairro
        this.endereco.cidade = res.localidade
        this.endereco.logradouro = res.logradouro
        this.endereco.uf = res.uf    
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
  passaEndereco():Endereco{
    return this.endereco;
  }
  removerEndereco(){
    if(this.endereco.id!=""){
    AppComponent.isCarregando = true;
      this.clienteService.deletaEndereco(this.endereco.id).subscribe(
        res => {
          if(res) this.naoRemovido = false;
          AppComponent.isCarregando = false;
        },
        error => {
          AppComponent.isCarregando = false;
        },
        () => {
          AppComponent.isCarregando = false;
        }
      )
    }else{
      this.naoRemovido = false;
    }
  }
  tornarPrincipal(){
    AppComponent.isCarregando = true;
    this.clienteService.tornarEndPrincipal(this.endereco.id).subscribe(
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
  constructor(private clienteService: ClienteService, private router: Router) {
  }

  ngOnInit(): void {
    if(this.tipo == 'S'){
      this.titulo= "Endereço Principal"
      this.eAlternativo = false;
      this.eAlternativoPrincipal = false;
    }else{
      this.titulo= "Endereço Alternativo"
      if(this.endereco.id != ""){
        this.eAlternativoPrincipal = true;
      }else{
        this.eAlternativoPrincipal = false;
      }
      this.eAlternativo = true;
    }
    this.endereco.is_primario=this.tipo;
  }

}
