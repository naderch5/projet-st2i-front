import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EtapeService } from 'app/shared/services/etape-service/etape.service';
import { EtapeDTO } from '../etape.model';

@Component({
  standalone: true,
  selector: 'app-update-etape',
  templateUrl: './update-etape.component.html',
  styleUrls: ['./update-etape.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class UpdateEtapeComponent implements OnInit {
  etape: EtapeDTO = {
    nom: '',
    phases: []
  };

  constructor(
    private etapeService: EtapeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Fetch the Etape using the ID from the route parameter
    const etapeId = this.route.snapshot.paramMap.get('id');
    if (etapeId) {
      this.etapeService.getEtapeById(+etapeId).subscribe((data) => {
        this.etape = data;  // Set the fetched Etape to the component's etape property
      });
    }
  }

  updateEtape(): void {
    this.etapeService.updateEtape(this.etape.id, this.etape).subscribe(() => {
      this.router.navigate(['/etape/list']);  // Navigate to the Etape list after update
    });
  }

  addPhase() {
    // Add an empty phase to the phases array
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
