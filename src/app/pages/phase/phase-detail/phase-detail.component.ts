import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhaseService } from 'app/shared/services/phase-service/phase.service';
import { PhaseDTO } from '../phase.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-phase-detail',
  templateUrl: './phase-detail.component.html',
  styleUrls: ['./phase-detail.component.scss'],
  imports: [CommonModule]
})
export class PhaseDetailComponent implements OnInit {
  phases: PhaseDTO[] = [];

  constructor(
    private route: ActivatedRoute,
    private phaseService: PhaseService
  ) {}

  ngOnInit(): void {
    const etapeId = Number(this.route.snapshot.paramMap.get('id'));
    if (etapeId) {
      this.phaseService.getPhasesByEtapeId(etapeId).subscribe({
        next: (data: PhaseDTO[]) => {
          this.phases = data;
        },
        error: (err) => {
          console.error('Erreur lors du chargement des phases pour cette étape :', err);
        }
      });
    }
  }
  getCategoryClass(category: string): string {
    return 'badge-' + category.toLowerCase().split(' ').join('-');
  }
  getProgressColor(value: number): string {
    if (value >= 75) return '#38a169';     // vert
    if (value >= 50) return '#ecc94b';     // jaune
    if (value >= 25) return '#f6ad55';     // orange
    return '#e53e3e';                      // rouge
  }
  
}
