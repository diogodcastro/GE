import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './deposit/deposit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'equipment-list'
  },
  {
    path: 'equipment-list',
    component: EquipmentListComponent
  },
  {
    path: 'equipment-deposit',
    component: DepositComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule {}
