import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './usuario/login/login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'layout', // layout/dashboard
    loadChildren: () =>
      import('./compartido/compartido.module').then((m) => m.CompartidoModule),
    // canActivate: [AuthGuard], // Protege la ruta con AuthGuard
    // runGuardsAndResolvers: 'always', // Asegura que el guardia se ejecute siempre
  },
  {
    path: '**', redirectTo: 'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }