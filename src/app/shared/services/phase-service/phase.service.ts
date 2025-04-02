import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhaseDTO } from 'app/pages/phase/phase.model';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

  private apiUrl = 'http://localhost:8081/api/phases';  // L'URL pour les phases, à ajuster selon votre API

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer toutes les phases
  getAllPhases(): Observable<PhaseDTO[]> {
    return this.http.get<PhaseDTO[]>(this.apiUrl);
  }

  // Méthode pour récupérer une phase par son ID
  getPhaseById(id: number): Observable<PhaseDTO> {
    return this.http.get<PhaseDTO>(`${this.apiUrl}/${id}`);
  }

  // Méthode pour créer une phase
  createPhase(phase: PhaseDTO): Observable<PhaseDTO> {
    return this.http.post<PhaseDTO>(this.apiUrl, phase);
  }

  updatePhase(id: number, phase: PhaseDTO): Observable<PhaseDTO> {
    return this.http.put<PhaseDTO>(`${this.apiUrl}/${id}`, phase);
  }
  

  // Méthode pour supprimer une phase
  deletePhase(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getPhasesByEtapeId(etapeId: number): Observable<PhaseDTO[]> {
    return this.http.get<PhaseDTO[]>(`http://localhost:8081/api/phases/etape/${etapeId}`);
  }
  
  
  
}
