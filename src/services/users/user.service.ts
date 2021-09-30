import { Injectable } from '@angular/core';
import { UserInterface } from 'src/interfaces/user/UserInterface';

@Injectable()
export class UserService {
    private usuario: Array <UserInterface>;

    constructor(){
        this.usuario= [
            {
                id: 1,
                apellido: 'prueba_1',
                contrasena: '1234',
                fechaNacimiento: new Date(),
                nombre: 'prueba_1',
                usuario: 'prueba_1'
            },
            {
                id: 2,
                apellido: 'prueba_2',
                contrasena: '1234',
                fechaNacimiento: new Date(),
                nombre: 'prueba_2',
                usuario: 'prueba_2'
            },
            {
                id: 3,
                apellido: 'prueba_3',
                contrasena: '1234',
                fechaNacimiento: new Date(),
                nombre: 'prueba_3',
                usuario: 'prueba_3'
            }
        ]
    }

    public agregarUsuario(usuarioNuevo: UserInterface){
        this.usuario.push(usuarioNuevo);
    }

    public iniciarSesion(usuario: string, contrasena: string): UserInterface|undefined{
        let usuarioEncontrado: UserInterface | undefined=undefined
        for(let temp of this.usuario){
            if(temp.usuario===usuario && temp.contrasena===contrasena){
                usuarioEncontrado=temp;
                break;
            }
        }
        return usuarioEncontrado;
    }
}