import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sesion } from '../usuario/interfaces/sesion';

@Injectable({
  providedIn: 'root',
})
export class CompartidoService {
  constructor(private _snackBar: MatSnackBar) {}

  mostrarAlerta(mensaje: string, tipo: string) {
    this._snackBar.open(mensaje, tipo, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000,
    });
  }
  guardarSesion(sesion: Sesion) {
    localStorage.setItem('usuariosesion', JSON.stringify(sesion));
  }
  /*
    ObtenerSesion(){
      var sesionString = localStorage.getItem("usuarioSesion");
      var usuarioToken = JSON.parse(sesionString!);
      return usuarioToken;
    }*/

  ObtenerSesion(): string | null {
    try {
      const sesionString = localStorage.getItem('usuariosesion');
      if (sesionString) {
        const usuarioToken: Sesion = JSON.parse(sesionString);
        console.log('Usuario Token parseado:', usuarioToken);
        return usuarioToken.token;
      } else {
        console.log('No se encontró "usuarioSesion" en localStorage');
      }
    } catch (e) {
      console.error('Error al analizar JSON desde localStorage:', e);
    }
    return null;
  }

  eliminarSesion() {
    localStorage.removeItem('usuariosesion');
  }
}
