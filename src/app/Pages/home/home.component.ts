import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user: any;
  tests = [
    {
      nombre: 'Fiscal'
    },
    {
      nombre: 'Costos'
    },
    {
      nombre: 'Auditorias'
    },
    {
      nombre: 'Finanzas'
    },
    {
      nombre: 'Contabilidad'
    }
  ];
  constructor(public _userService: UserService) {
      this._userService.afAuth.authState
        .subscribe(
          (user) => {
            this.user = user;
            console.log(user);
          }
        )
   }

  ngOnInit() {
  }

}
