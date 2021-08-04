import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Endereco } from 'src/app/services/models/cliente.model';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

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
  
  @Input() tipo = '';
titulo ='';
  passaEndereco():Endereco{
    return this.endereco;
  }
  constructor() {
    
   }

  ngOnInit(): void {
    if(this.tipo == 'S'){
      this.titulo= "Endereço Principal"
    }else{
      this.titulo= "Endereço Alternativo"
    }
    this.endereco.is_primario=this.tipo;
  }

}
