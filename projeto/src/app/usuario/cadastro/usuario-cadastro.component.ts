import { Component, inject, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: '/usuario-cadastro.component.html',
  styleUrls: ['../usuario.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  public usuario:Usuario = new Usuario()
  usuarioService: any;
  constructor() { }

  

  ngOnInit(): void {
  }

}
