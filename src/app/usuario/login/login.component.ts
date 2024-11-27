import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    usuario: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.loginForm.valid) {
      const loginData = {
        username: this.loginForm.get('usuario')?.value,
        password: this.loginForm.get('password')?.value
      };

      this.usuarioService.iniciarSesion(loginData).subscribe(
        (response: any) => {
          console.log('Login successful', response);
          // Almacenar el token en el almacenamiento local o en una cookie
          localStorage.setItem('token', response.token);
          // Navegar a otra página, por ejemplo, el dashboard
          this.router.navigate(['/layout']);
        },
        (error) => {
          console.error('Login failed', error);
          // Manejar el error de inicio de sesión, por ejemplo, mostrar un mensaje de error
        }
      );
    }
  }
}