import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { NewEquipmentComponent } from './new-equipment/new-equipment.component';

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
  },
  {
    path: 'equipment-withdraw',
    component: WithdrawComponent
  },
  {
    path: 'new-equipment',
    component: NewEquipmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule {}
