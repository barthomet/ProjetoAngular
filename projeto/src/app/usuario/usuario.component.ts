import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario!:Usuario 
  usuarios:any = []
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    //this.usuario = this.usuarioService.getUsuario()
    this.usuarioService.getUsuario().subscribe(response => {this.usuarios = response})
  }

}
