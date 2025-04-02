import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FacturationService } from 'app/shared/services/fact-service/facturation.service';
import { FacturationDTO } from '../facturation.model';

@Component({
  standalone: true,
  selector: 'app-create-facture',
  templateUrl: './create-facture.component.html',
  styleUrls: ['./create-facture.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class CreateFactureComponent {
  facture: FacturationDTO = {
    montantTotal: 0,
    montantPaye: 0,
    dateEmission: '',
    dateEcheance: '',
    statut: '',
    projectId: null
  };

  constructor(
    private facturationService: FacturationService,
    private router: Router
  ) {}

  createFacture() {
    this.facturationService.createFacturation(this.facture).subscribe(() => {
      this.router.navigate(['/facturation/liste']);
    });
  }
}
