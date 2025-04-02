import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface AuthResponse {
  token: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8081/api/users'; // ⚠️ adapte si ton port diffère

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      email: email,
      password: password
    };

    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, body, { headers });
  }

  // ➕ Optionnel : méthode pour récupérer le user connecté
  whoAmI(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.baseUrl}/whoami`, { headers });
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
