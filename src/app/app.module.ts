import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioModule } from './usuario/usuario.module';
import { MaterialModule } from './material/material.module';
import { CompartidoModule } from './compartido/compartido.module';



@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    UsuarioModule,
    MaterialModule,
    CompartidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
