import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { FormsModule } from '@angular/forms';
import { EtapeService } from '../../shared/services/etape-service/etape.service';
import { EtapeRoutingModule } from './etape-routing.module';
import { CreateEtapeComponent } from './create-etape/create-etape.component';
import { UpdateEtapeComponent } from './update-etape/update-etape.component';
import { ListEtapeComponent } from './list-etape/list-etape.component';  // Your list component
import { EtapeDetailComponent } from './etape-detail/etape-detail.component';

@NgModule({
  declarations: [
    CreateEtapeComponent,
    UpdateEtapeComponent,
    ListEtapeComponent,  // Add ListEtapeComponent to declarations
    EtapeDetailComponent
  ],
  imports: [
    CommonModule,  // Import CommonModule for ngForOf and other common directives
    FormsModule,  // For ngModel and forms functionality
    EtapeRoutingModule  // Routing for Etape
  ],
  providers: [EtapeService],  // Provide EtapeService
})
export class EtapeModule { }
