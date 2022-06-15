import { Component, OnInit } from '@angular/core';

import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario!:Usuario 
  usuarios:any = []
  form:any = {}

  constructor(private usuarioService:UsuarioService) { }  

  ngOnInit(): void {  
    this.usuarioService.getUsuario().subscribe(response => {this.usuarios = response})
  }

  criar(frm: any){
    this.usuarioService.criar(this.form)     
  }
}
