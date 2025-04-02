import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  id?: number;

  codeProjet: string;
  nomProjet: string;
  client: string;
  description: string;
  modeleBusiness: string;
  typeEngagement: string;
  chefProjet: string;

  dateDebut: string; // ISO format ex: '2024-06-01'
  dateFin: string;

  budgetTotal: number;
  budgetInitial?: number;
  budgetAvenant?: number;
  provisionRisques?: number;
  provisionPenalites?: number;
  margeNette?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = 'http://localhost:8081/api/projects'; // adapte si besoin

  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl);
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/${id}`);
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.baseUrl, project);
  }

  updateProject(id: number, project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.baseUrl}/${id}`, project);
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
