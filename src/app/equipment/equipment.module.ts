import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentService } from '../shared/services/equipment.service';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentRoutingModule } from './equipment-routing.module';
import { DepositComponent } from './deposit/deposit.component';
import { SharedModule } from '../shared/shared.module';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { NewEquipmentComponent } from './new-equipment/new-equipment.component';
import { MovementService } from '../shared/services/movement.service';

@NgModule({
  imports: [
    CommonModule,
    EquipmentRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [EquipmentListComponent, DepositComponent, WithdrawComponent, NewEquipmentComponent],
  providers: [EquipmentService, MovementService]
})
export class EquipmentModule {}
