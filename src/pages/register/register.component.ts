import { Component } from "@angular/core";
import { UserInterface } from "src/interfaces/user/UserInterface";
import { UserService } from "src/services/users/user.service";

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent {
    private servicio: UserService;

    public usuario: UserInterface = {
        nombre: '',
        apellido: '',
        contrasena: '',
        fechaNacimiento: new Date(),
        usuario: ''
    }
    
    constructor(parametro: UserService){
        this.servicio = parametro;
    }

    public datosPorConsola() {
        this.servicio.agregarUsuario(this.usuario);
        this.usuario = {
            nombre: '',
            apellido: '',
            contrasena: '',
            fechaNacimiento: new Date(),
            usuario: ''}
    } 
    
}