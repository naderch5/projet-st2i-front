import { Component, OnInit } from '@angular/core';
import { EtapeService } from 'app/shared/services/etape-service/etape.service'; // Service to fetch Etapes
import { EtapeDTO } from '../etape.model';  // Etape model to structure data
import { CommonModule } from '@angular/common';  // Import CommonModule
import { FormsModule } from '@angular/forms';    // Import FormsModule for ngModel binding

@Component({
  standalone: true,
  selector: 'app-list-etape',
  templateUrl: './list-etape.component.html',
  styleUrls: ['./list-etape.component.scss'],
  imports: [CommonModule, FormsModule]  // Add CommonModule and FormsModule to imports
})
export class ListEtapeComponent implements OnInit {
  etapes: EtapeDTO[] = [];  // Array to hold the list of Etapes

  constructor(private etapeService: EtapeService) {}

  ngOnInit(): void {
    this.getEtapes();  // Fetch Etapes on component initialization
  }

  // Method to fetch Etapes from the service
  getEtapes(): void {
    this.etapeService.getAllEtapes().subscribe({
      next: (data) => {
        this.etapes = data;  // Store the fetched Etapes
      },
      error: (err) => {
        console.error('Error fetching Etapes:', err);
      }
    });
  }

  // Helper method to calculate total duration of phases in an Etape
  getTotalDureeJours(etape: EtapeDTO): number {
    if (etape.phases && etape.phases.length > 0) {
      return etape.phases.reduce((sum, phase) => sum + phase.dureeJours, 0);
    }
    return 0;  // If no phases exist, return 0
  }

  // Helper method to calculate average progression of phases in an Etape
  getMoyenneProgression(etape: EtapeDTO): number {
    if (etape.phases && etape.phases.length > 0) {
      const totalProgression = etape.phases.reduce((sum, phase) => sum + phase.progression, 0);
      return totalProgression / etape.phases.length;
    }
    return 0;  // If no phases exist, return 0
  }
}
