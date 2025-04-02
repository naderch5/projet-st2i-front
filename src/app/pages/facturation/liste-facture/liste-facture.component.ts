import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Facturation } from '../facturation.model';
import { FacturationService } from 'app/shared/services/fact-service/facturation.service';

@Component({
  standalone: true,
  selector: 'app-liste-facture',
  templateUrl: './liste-facture.component.html',
  styleUrls: ['./liste-facture.component.scss'],
  imports: [CommonModule]
})
export class ListeFactureComponent implements OnInit {
  factures: Facturation[] = [];

  constructor(
    private facturationService: FacturationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getFactures();
  }

  getFactures(): void {
    this.facturationService.getAllFacturations().subscribe(data => {
      this.factures = data;
    });
  }

  update(id: number): void {
    this.router.navigate([`/facturation/update/${id}`]);
  }

  delete(id: number): void {
    this.facturationService.deleteFacturation(id).subscribe(() => {
      this.getFactures();
    });
  }
}
