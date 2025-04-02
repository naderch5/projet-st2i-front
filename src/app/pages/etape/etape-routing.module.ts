import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEtapeComponent } from './list-etape/list-etape.component';
import { CreateEtapeComponent } from './create-etape/create-etape.component';
import { UpdateEtapeComponent } from './update-etape/update-etape.component';
import { EtapeDetailComponent } from './etape-detail/etape-detail.component';

const routes: Routes = [
  { path: 'list', component: ListEtapeComponent, data: { title: 'List of Etapes' } },
  { path: 'create', component: CreateEtapeComponent, data: { title: 'Create Etape' } },
  { path: 'update/:id', component: UpdateEtapeComponent, data: { title: 'Update Etape' } },
  { path: 'detail/:id', component: EtapeDetailComponent, data: { title: 'Etape Detail' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Define child routes for Etape module
  exports: [RouterModule]
})
export class EtapeRoutingModule { }
