import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { EquipmentService } from './services/equipment.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { MovementService } from './services/movement.service';
import { EquipmentsInfoService } from './services/equipmentsInfo.service';
import { UiSwitchModule } from 'ngx-toggle-switch';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, RouterModule, UiSwitchModule],
  declarations: [],
  exports: [CommonModule, ReactiveFormsModule, TranslateModule, RouterModule, UiSwitchModule ],
  providers: [UserService, EquipmentService, MovementService, EquipmentsInfoService]
})
export class SharedModule {}
