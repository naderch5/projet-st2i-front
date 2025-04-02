import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhaseService } from 'app/shared/services/phase-service/phase.service';
import { PhaseDTO } from '../phase.model';

@Component({
  standalone: true,
  selector: 'app-create-phase',
  templateUrl: './create-phase.component.html',
  styleUrls: ['./create-phase.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class CreatePhaseComponent {
  phase: PhaseDTO = {
    nom: '',
    assignedTo: '',
    category: '',
    progression: 0,
    dureeJours: 0,
    dateDebut: '',
    dateFin: ''
  };

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
    private router: Router
  ) {}

  createPhase() {
    this.phaseService.createPhase(this.phase).subscribe(() => {
      this.router.navigate(['/phase/list']);
    });
  }
}
