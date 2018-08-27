import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovementRecordsComponent } from './movement-records/movement-records.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movements'
  },
  {
    path: 'movements',
    component: MovementRecordsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule {}
