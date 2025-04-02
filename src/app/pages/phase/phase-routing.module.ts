import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePhaseComponent } from './create-phase/create-phase.component';
import { ListPhaseComponent } from './list-phase/list-phase.component';
import { UpdatePhaseComponent } from './update-phase/update-phase.component';
import { PhaseDetailComponent } from './phase-detail/phase-detail.component';

const routes: Routes = [
  { path: 'phase/create', component: CreatePhaseComponent },
  { path: 'phase/list', component: ListPhaseComponent },
  { path: 'phase/update/:id', component: UpdatePhaseComponent },
  { path: 'phase/detail/:id', component: PhaseDetailComponent },
  { path: '**', redirectTo: 'home' }  // Adjust as necessary
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhaseRoutingModule { }
