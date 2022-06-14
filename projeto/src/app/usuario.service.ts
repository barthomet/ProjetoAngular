import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url ="http://localhost:8080/users"
  constructor(private http: HttpClient) { }

   getUsuario():Observable<any[]>{
    
    return this.http.get<any[]>(this.url);
  }

  async criar(usuario: any){
    await axios.post(this.url, usuario)
  }
}