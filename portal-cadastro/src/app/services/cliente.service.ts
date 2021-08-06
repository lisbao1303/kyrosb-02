import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente, EnderecoViaCep } from './models/cliente.model';

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

  atualizaCliente(request: Cliente): Observable<boolean>{
    return this.http.put<boolean>(environment.apiUrl + "atualiza",request);
  }

  clientePorCpf(request: string): Observable<Cliente>{
    return this.http.get<Cliente>(environment.apiUrl + request);
  }

  deletaCliente(request: string): Observable<boolean>{
    return this.http.delete<boolean>(environment.apiUrl + request);
  }

  deletaEndereco(request: string): Observable<boolean>{
    return this.http.delete<boolean>(environment.apiUrl +"endereco/"+ request);
  }
  tornarEndPrincipal(request: string):Observable<boolean>{
    return this.http.post<boolean>(environment.apiUrl +"endereco/principal/"+ request,request);
  }

  enderecoPorCep(request: string):Observable<EnderecoViaCep>{
    return this.http.get<EnderecoViaCep>(environment.apiUrlCEP +request + "/json/");
  }
}
