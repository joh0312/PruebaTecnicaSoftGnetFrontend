import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoModule } from '../compartido/compartido.module';
import { UsuarioService } from './servicios/usuario.service';
import { LoginComponent } from './login/login.component';

import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    CompartidoModule,
    MaterialModule
  ],
  providers: [
    UsuarioService
  ],
  exports: [
    LoginComponent,
    
  ]
})
export class UsuarioModule { }
