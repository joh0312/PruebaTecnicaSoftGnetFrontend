import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriversComponent } from './drivers/drivers.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
      { path: 'drivers', component: DriversComponent, pathMatch: 'full' },
      {path: 'vehicles', component: VehiclesComponent, pathMatch: 'full'},
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }