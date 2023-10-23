import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: 'j', nombre: 'juan', apellido: 'ellen', sexo: 'masculino'},
    {usuario: 'omar', nombre: 'juan1', apellido: 'ellen', sexo: 'masculino'},
    {usuario: 's', nombre: 'juan2', apellido: 'ellen', sexo: 'masculino'},
    {usuario: 'z', nombre: 'juan3', apellido: 'ellen', sexo: 'masculino'},
    {usuario: 'x', nombre: 'juan4', apellido: 'ellen', sexo: 'masculino'},
    {usuario: 'c', nombre: 'juan5', apellido: 'ellen', sexo: 'masculino'},
    {usuario: 'n', nombre: 'juan6', apellido: 'ellen', sexo: 'masculino'},
    {usuario: 'm', nombre: 'juan7', apellido: 'ellen', sexo: 'masculino'},
    {usuario: 'l', nombre: 'juan8', apellido: 'ellen', sexo: 'masculino'},
    {usuario: 'ñ', nombre: 'juan9', apellido: 'ellen', sexo: 'masculino'},
    {usuario: 'a', nombre: 'juan10', apellido: 'ellen', sexo: 'femenino'},
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
