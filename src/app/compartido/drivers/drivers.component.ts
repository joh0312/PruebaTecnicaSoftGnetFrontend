import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';


interface Driver {
  id: number;
  last_name: string;
  first_name: string;
  ssn: string;
  dob: Date;
  address: string;
  city: string;
  zip: string;
  phone: number;
  active: boolean;
}

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  driverForm: FormGroup;
  drivers: MatTableDataSource<Driver>;
  displayedColumns: string[] = ['last_name', 'first_name', 'ssn', 'dob', 'address', 'city', 'zip', 'phone', 'active', 'actions'];

  constructor(private fb: FormBuilder) {
    this.driverForm = this.fb.group({
      last_name: ['', [Validators.required, Validators.maxLength(255)]],
      first_name: ['', [Validators.required, Validators.maxLength(255)]],
      ssn: ['', [Validators.required, Validators.maxLength(20)]],
      dob: ['', Validators.required],
      address: ['', Validators.maxLength(255)],
      city: ['', Validators.maxLength(100)],
      zip: ['', Validators.maxLength(20)],
      phone: [''],
      active: [false]
    });

    this.drivers = new MatTableDataSource<Driver>([]);
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.driverForm.valid) {
      const newDriver: Driver = {
        id: this.drivers.data.length + 1,
        ...this.driverForm.value
      };
      this.drivers.data = [...this.drivers.data, newDriver];
      this.driverForm.reset();
    }
  }

  // getDrivers(token: string): Observable<Driver[]> {
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   return this.http.get<Driver[]>(this.apiUrl, { headers });
  // }

  editDriver(driver: Driver): void {
    this.driverForm.patchValue(driver);
  }

  deleteDriver(id: number): void {
    this.drivers.data = this.drivers.data.filter(driver => driver.id !== id);
  }
}