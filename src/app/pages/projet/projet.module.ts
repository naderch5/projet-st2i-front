import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CreateProjetComponent } from './create-projet/create-projet.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { ListeProjetsComponent } from './list-projet/list-projet.component';

const routes: Routes = [
  { path: '', component: ListeProjetsComponent },
  { path: 'create', component: CreateProjetComponent },
  { path: 'update/:id', component: UpdateProjetComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListeProjetsComponent],
  // 👉 N'ajoute pas les standalone comme `CreateProjetComponent` ici
})
export class ProjetModule { }
