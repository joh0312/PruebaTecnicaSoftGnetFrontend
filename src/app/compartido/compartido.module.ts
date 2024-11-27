import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { DriversComponent } from './drivers/drivers.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { VehiclesComponent } from './vehicles/vehicles.component';


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    DriversComponent,
    VehiclesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutRoutingModule,
    ReactiveFormsModule
    
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LayoutComponent,
    DashboardComponent
    
  ]
})
export class CompartidoModule { }