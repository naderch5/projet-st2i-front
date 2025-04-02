import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel binding
import { PhaseService } from 'app/shared/services/phase-service/phase.service';  // Import PhaseService
import { PhaseRoutingModule } from './phase-routing.module';  // Import routing module for Phase
import { CreatePhaseComponent } from './create-phase/create-phase.component';  // Import CreatePhaseComponent
import { ListPhaseComponent } from './list-phase/list-phase.component';  // Import ListPhaseComponent
import { UpdatePhaseComponent } from './update-phase/update-phase.component';  // Import UpdatePhaseComponent
import { PhaseDetailComponent } from './phase-detail/phase-detail.component';  // Import PhaseDetailComponent

@NgModule({
  declarations: [
    CreatePhaseComponent,  // Declare CreatePhaseComponent
    ListPhaseComponent,    // Declare ListPhaseComponent
    UpdatePhaseComponent,  // Declare UpdatePhaseComponent
    PhaseDetailComponent   // Declare PhaseDetailComponent
  ],
  imports: [
    CommonModule,          // Import CommonModule for common directives (like ngIf, ngFor)
    FormsModule,           // Import FormsModule for two-way data binding with ngModel
    PhaseRoutingModule     // Import the routing module for Phase
  ],
  providers: [PhaseService],  // Provide PhaseService
})
export class PhaseModule { }
