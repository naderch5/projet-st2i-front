import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtapeService } from 'app/shared/services/etape-service/etape.service';
import { EtapeDTO } from '../etape.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-etape-detail',
  templateUrl: './etape-detail.component.html',
  styleUrls: ['./etape-detail.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class EtapeDetailComponent implements OnInit {
  etape: EtapeDTO | null = null;

  constructor(private etapeService: EtapeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.getEtape(id);
  }

  getEtape(id: string): void {
    this.etapeService.getEtapeById(+id).subscribe((data) => {
      this.etape = data;
    });
  }
}
