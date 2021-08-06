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
  public static isCarregando = false;
  public static router: Router;
  constructor(private routerPrivate: Router) {
    AppComponent.router = routerPrivate;
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
