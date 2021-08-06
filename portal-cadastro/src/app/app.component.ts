import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  innerWidth = window.innerWidth;
  title = "portal-cadastro";
  hover = ['white', 'white', 'white'];
  public static isCarregando = false;
  public static router: Router;
  constructor(private routerPrivate: Router) {
    AppComponent.router = routerPrivate;    
  }

  mudancaDeRota(){
    console.log(this.routerPrivate.url)
    switch (this.routerPrivate.url) {
      case '/novocliente':
        this.hover = ['#FAC426', 'white', 'white'];
        break;
      case '/cliente/buscar':
        this.hover = ['white', '#FAC426', 'white'];
        break;
      case '/gerenciador':
        this.hover = ['white', 'white', '#FAC426'];
        break;
      default:
        this.hover = ['white', 'white', 'white'];
    }
  }

  public static onRefresh() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  get Carregando() {
    return AppComponent.isCarregando;
  }
}
