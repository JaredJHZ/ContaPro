import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  paginas = [
    {
      nombre: 'Sesión',
      route: '/login'
    },
    {
      nombre: 'Quiz',
      route: '/home'
    },
    {
      nombre: 'Info',
      route: '/info'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
