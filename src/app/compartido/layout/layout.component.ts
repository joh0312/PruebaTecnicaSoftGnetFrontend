import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  usuario: string = '';

  constructor() { }

  ngOnInit(): void {
  }


  cerrarSesion(): void {

    

    console.log('Cerrar sesión');

  }

}
