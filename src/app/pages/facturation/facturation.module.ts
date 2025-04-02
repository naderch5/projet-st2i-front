import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ❌ NE PAS importer les standalone components ici
// car ils seront chargés via loadComponent dans les routes

@NgModule({
  declarations: [
    // Ne rien mettre ici si les composants sont standalone
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FacturationModule {}
