import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { EquipmentService } from '../shared/services/equipment.service';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentRoutingModule } from './equipment-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    EquipmentRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [],
  declarations: [EquipmentListComponent],
  providers: [EquipmentService]
})
export class EquipmentModule {}
