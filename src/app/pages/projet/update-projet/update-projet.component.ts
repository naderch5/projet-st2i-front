import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectService, Project } from 'app/shared/services/proj-service/project.service';

@Component({
  selector: 'app-update-projet',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.scss']
})
export class UpdateProjetComponent implements OnInit {
  projectId!: string;
  project: Project = {} as Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id')!;
    const numericId = Number(this.projectId);
    this.projectService.getProjectById(numericId).subscribe(data => {
      this.project = data;
    });
  }
  
  updateProject(): void {
    const numericId = Number(this.projectId);
    this.projectService.updateProject(numericId, this.project).subscribe({
      next: () => {
        console.log('✅ Projet mis à jour avec succès !');
      },
      error: (err) => {
        console.error('❌ Erreur lors de la mise à jour du projet :', err);
      }
    });
  }
}
