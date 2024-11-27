import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

interface Vehicle {
  id: number;
  description: string;
  year: number;
  make: number;
  capacity: number;
  active: boolean;
}

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicleForm: FormGroup;
  vehicles: MatTableDataSource<Vehicle>;
  displayedColumns: string[] = ['description', 'year', 'make', 'capacity', 'active', 'actions'];

  constructor(private fb: FormBuilder) {
    this.vehicleForm = this.fb.group({
      description: ['', [Validators.required, Validators.maxLength(255)]],
      year: ['', [Validators.required, Validators.maxLength(4)]],
      make: ['', [Validators.required, Validators.maxLength(255)]],
      capacity: ['', [Validators.required, Validators.maxLength(10)]],
      active: [false]
    });

    this.vehicles = new MatTableDataSource<Vehicle>([]);
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.vehicleForm.valid) {
      const newVehicle: Vehicle = {
        id: this.vehicles.data.length + 1,
        ...this.vehicleForm.value
      };
      this.vehicles.data = [...this.vehicles.data, newVehicle];
      this.vehicleForm.reset();
    }
  }

  editVehicle(vehicle: Vehicle): void {
    this.vehicleForm.patchValue(vehicle);
  }

  deleteVehicle(id: number): void {
    this.vehicles.data = this.vehicles.data.filter(vehicle => vehicle.id !== id);
  }
}