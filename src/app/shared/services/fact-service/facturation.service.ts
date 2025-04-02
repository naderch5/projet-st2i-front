import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facturation, FacturationDTO } from '../../../pages/facturation/facturation.model';

@Injectable({
  providedIn: 'root'
})
export class FacturationService {
  private apiUrl = 'http://localhost:8081/api/facturations';

  constructor(private http: HttpClient) {}

  getAllFacturations(): Observable<Facturation[]> {
    return this.http.get<Facturation[]>(this.apiUrl);
  }

  getFacturationById(id: number): Observable<Facturation> {
    return this.http.get<Facturation>(`${this.apiUrl}/${id}`);
  }

  createFacturation(facture: FacturationDTO): Observable<Facturation> {
    return this.http.post<Facturation>(this.apiUrl, facture);
  }

  updateFacturation(id: number, facture: FacturationDTO): Observable<Facturation> {
    return this.http.put<Facturation>(`${this.apiUrl}/${id}`, facture);
  }

  deleteFacturation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
} 
