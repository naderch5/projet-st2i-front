import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EtapeService } from 'app/shared/services/etape-service/etape.service';
import { EtapeDTO } from '../etape.model';

@Component({
  standalone: true,
  selector: 'app-create-etape',
  templateUrl: './create-etape.component.html',
  styleUrls: ['./create-etape.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class CreateEtapeComponent {
  etape: EtapeDTO = {
    nom: '',
    phases: []
  };

  constructor(
    private etapeService: EtapeService,
    private router: Router
  ) {}

  createEtape() {
    this.etapeService.createEtape(this.etape).subscribe(() => {
      this.router.navigate(['/etape/list']);  // Update the path as needed
    });
  }

  addPhase() {
    this.etape.phases.push({
      nom: '',
      assignedTo: '',
      category: '',
      progression: 0,
      dureeJours: 0,
      dateDebut: '',
      dateFin: ''
    });
  }
}
