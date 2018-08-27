import { NgModule } from '@angular/core';
import { MovementRecordsComponent } from './movement-records/movement-records.component';
import { RecordsRoutingModule } from './records-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MovementService } from '../shared/services/movement.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RecordsRoutingModule],
  exports: [],
  declarations: [MovementRecordsComponent],
  providers: [MovementService]
})
export class RecordsModule {}
