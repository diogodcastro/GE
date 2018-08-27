import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { EquipmentService } from './services/equipment.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { MovementService } from './services/movement.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, RouterModule],
  declarations: [],
  exports: [CommonModule, ReactiveFormsModule, TranslateModule, RouterModule ],
  providers: [UserService, EquipmentService, MovementService]
})
export class SharedModule {}
