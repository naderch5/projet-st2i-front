import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FacturationService } from 'app/shared/services/fact-service/facturation.service';
import { Facturation, FacturationDTO } from '../facturation.model';

@Component({
  standalone: true,
  selector: 'app-update-facture',
  templateUrl: './update-facture.component.html',
  styleUrls: ['./update-facture.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class UpdateFactureComponent implements OnInit {
  facture: Facturation = {
    id: null,
    montantTotal: 0,
    montantPaye: 0,
    dateEmission: '',
    dateEcheance: '',
    statut: '',
    projectId: null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private facturationService: FacturationService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.facturationService.getFacturationById(id).subscribe(data => {
      this.facture = data;
    });
  }

  updateFacture(): void {
    const id = this.facture.id!;
    const dto: FacturationDTO = {
      montantTotal: this.facture.montantTotal,
      montantPaye: this.facture.montantPaye,
      dateEmission: this.facture.dateEmission,
      dateEcheance: this.facture.dateEcheance,
      statut: this.facture.statut,
      projectId: this.facture.projectId
    };

    this.facturationService.updateFacturation(id, dto).subscribe(() => {
      this.router.navigate(['/facturation/liste']);
    });
  }
}
