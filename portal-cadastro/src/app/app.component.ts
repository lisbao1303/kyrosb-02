import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  innerWidth = window.innerWidth;
  title= "portal-cadastro";
  public static isCarregando = false;
  constructor() {
  }  
 
  get Carregando(){
    return AppComponent.isCarregando;
  }  
}
