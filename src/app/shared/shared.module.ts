import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { EquipmentService } from './services/equipment.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [CommonModule],
  providers: [UserService, EquipmentService]
})
export class SharedModule {}
