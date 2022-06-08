import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url ="http://localhost:8080/users"
  constructor(private http: HttpClient) { }

  httpOptions = {
    
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json' ,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3',
    }),
  }
  

  getUsuario():Observable<any[]>{
    
    return this.http.get<any[]>(this.url);
  }

 /* public getUsuario(): Usuario{
    let usuario = new Usuario()
    usuario.nome = "Rafael"
    usuario.email = "rafabarth97@gmail.com"

    return usuario
  }*/
}
