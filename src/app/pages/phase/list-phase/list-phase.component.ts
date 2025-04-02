import { Component, OnInit } from '@angular/core';
import { PhaseService } from 'app/shared/services/phase-service/phase.service';
import { PhaseDTO } from '../phase.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // ✅ Ajout du Router pour la navigation

@Component({
  standalone: true,
  selector: 'app-list-phase',
  templateUrl: './list-phase.component.html',
  styleUrls: ['./list-phase.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class ListPhaseComponent implements OnInit {
  phases: PhaseDTO[] = [];

  // ✅ Liste des catégories
  categories: string[] = [
    'Jalon',
    'Livrable client',
    'Document interne',
    'Formation',
    'Conception',
    'Implémentation',
    'Quality Review',
    'Dev',
    'Test QA',
    'Validation client'
  ];

  constructor(
    private phaseService: PhaseService,
    private router: Router // ✅ Injecter le Router
  ) {}

  ngOnInit(): void {
    this.getPhases();
  }

  getPhases(): void {
    this.phaseService.getAllPhases().subscribe((data) => {
      this.phases = data;
    });
  }

  // ✅ Naviguer vers la création
  goToCreatePhase(): void {
    this.router.navigate(['/phase/create']);
  }

  // ✅ Éditer une phase par ID
  editPhase(id: number): void {
    this.router.navigate(['/phase/update', id]);
  }

  // ✅ Supprimer une phase
  deletePhase(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cette phase ?')) {
      this.phaseService.deletePhase(id).subscribe(() => {
        this.getPhases(); // Refresh après suppression
      });
    }
  }

  getCategoryClass(category: string): string {
    const formatted = category.toLowerCase().replace(/\s+/g, '-');
    return 'badge-' + formatted;
  }
}
