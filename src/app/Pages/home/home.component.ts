import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tests = [
    {
      nombre:'Fiscal'
    },
    {
      nombre:'Costos'
    },
    {
      nombre:'Auditorias'
    },
    {
      nombre:'Finanzas'
    },
    {
      nombre:'Contabilidad'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
