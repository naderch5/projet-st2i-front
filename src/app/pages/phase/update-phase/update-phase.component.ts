import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhaseService } from 'app/shared/services/phase-service/phase.service';
import { PhaseDTO } from '../phase.model';

@Component({
  selector: 'app-update-phase',
  standalone: true,
  templateUrl: './update-phase.component.html',
  styleUrls: ['./update-phase.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class UpdatePhaseComponent implements OnInit {
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
    private route: ActivatedRoute,
    private router: Router,
    private phaseService: PhaseService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.phaseService.getPhaseById(id).subscribe((data) => {
        this.phase = data;
      });
    }
  }

  updatePhase(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // 🔥 Récupère l'ID
    this.phaseService.updatePhase(id, this.phase).subscribe(() => {
      this.router.navigate(['/phase/list']);
    });
  }
}
