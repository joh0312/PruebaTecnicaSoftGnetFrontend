import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../interfaces/driver';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
private apiUrl = environment.apiURL + '/Drivers';
 

  constructor(private http: HttpClient) {}

  // Obtener todos los conductores
  getDrivers(token: string): Observable<Driver[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Driver[]>(this.apiUrl, { headers });
  }

  // Crear un nuevo conductor
  createDriver(driver: Driver, token: string): Observable<Driver> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<Driver>(this.apiUrl, driver, { headers });
  }

  // Actualizar un conductor existente
  updateDriver(id: number, driver: Driver, token: string): Observable<Driver> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<Driver>(`${this.apiUrl}/${id}`, driver, { headers });
  }

  // Eliminar un conductor
  deleteDriver(id: number, token: string): Observable<void> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }
}