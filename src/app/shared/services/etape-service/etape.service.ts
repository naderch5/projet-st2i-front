import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EtapeDTO } from '../../../pages/etape/etape.model';

@Injectable({
  providedIn: 'root',
})
export class EtapeService {
  private apiUrl = 'http://localhost:8081/api/etapes'; // API URL for Etape

  constructor(private http: HttpClient) {}

  // Get all Etapes
  getAllEtapes(): Observable<EtapeDTO[]> {
    return this.http.get<EtapeDTO[]>(this.apiUrl);
  }

  // Get a specific Etape by ID
  getEtapeById(id: number): Observable<EtapeDTO> {
    return this.http.get<EtapeDTO>(`${this.apiUrl}/${id}`);
  }

  // Create a new Etape
  createEtape(etape: EtapeDTO): Observable<EtapeDTO> {
    return this.http.post<EtapeDTO>(this.apiUrl, etape);
  }

  // Update an existing Etape
  updateEtape(id: number, etape: EtapeDTO): Observable<EtapeDTO> {
    return this.http.put<EtapeDTO>(`${this.apiUrl}/${id}`, etape);
  }

  // Delete an Etape
  deleteEtape(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
