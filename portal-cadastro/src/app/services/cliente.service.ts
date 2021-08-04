import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from './models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  todosClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(environment.apiUrl+"obtertodos");
  }

  novoCliente(request: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(environment.apiUrl + "novo",request);
  }

  atualizaCliente(request: Cliente): void{
    this.http.put<Cliente>(environment.apiUrl + "atualiza",request);
  }

}
