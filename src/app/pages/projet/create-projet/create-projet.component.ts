import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectService, Project } from 'app/shared/services/proj-service/project.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-projet',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-projet.component.html',
  styleUrls: ['./create-projet.component.scss']
})
export class CreateProjetComponent implements OnInit {
  project: Project = {} as Project;
  projects: Project[] = [];
  constructor(
    private projectService: ProjectService,
    private router: Router // ✅ à ajouter ici
  ) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getAllProjects().subscribe({
      next: (data) => this.projects = data,
      error: (err) => console.error('❌ Erreur chargement projets :', err)
    });
  }
  createProject(): void {
    this.projectService.createProject(this.project).subscribe({
      next: (newProject) => {
        this.projects.push(newProject);
        this.project = {} as Project;
  
        // ✅ Redirection automatique
        this.router.navigate(['/listProjet']);
      },
      error: (err) => console.error('❌ Erreur création projet :', err)
    });
  }
}  