import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService, Project } from 'app/shared/services/proj-service/project.service';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-liste-projets',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule
  ],
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.scss']
})
export class ListeProjetsComponent implements OnInit {
  projects: Project[] = [];
  paginatedProjects: Project[] = [];

  pageSize = 5;
  currentPage = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getAllProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.updatePaginatedProjects();
      },
      error: (err) => console.error('❌ Erreur chargement projets :', err)
    });
  }

  onPageChange(event: any): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePaginatedProjects();
  }

  updatePaginatedProjects(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProjects = this.projects.slice(startIndex, endIndex);
  }

  editProject(id: number): void {
    this.router.navigate(['/updateProjet', id]);
  }

  deleteProject(id: number): void {
    if (confirm('❗ Supprimer ce projet ?')) {
      this.projectService.deleteProject(id).subscribe({
        next: () => {
          this.projects = this.projects.filter(p => p.id !== id);
          this.updatePaginatedProjects();
          console.log('✅ Projet supprimé');
        },
        error: (err) => console.error('❌ Erreur suppression :', err)
      });
    }
  }

  goToCreateProjet(): void {
    this.router.navigate(['/createProjet']);
  }
}
