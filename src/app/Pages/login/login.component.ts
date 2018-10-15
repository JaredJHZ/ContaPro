import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensajeBoton: string;
  autenticado: boolean ;

  constructor(public _userService: UserService, public router: Router) {
    this._userService.afAuth.authState.subscribe(
      (user) => {
        if (user) {
          this.autenticado = true;
          this.mensajeBoton = 'Cerrar sesión' ;
        } else {
          this.mensajeBoton = 'Google';
        }
      }
    );
   }

  ngOnInit() {
  }

  public accion(): void {
    if (this.autenticado) {
      this._userService.logout();
      this.autenticado = false;
      } else {
        this._userService.login()
         .then(() => this.router.navigate(['/home']) );
      }
  }
}
