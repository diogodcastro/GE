import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'users',
    loadChildren: 'app/users/users.module#UsersModule'
  },
  {
    path: 'equipment',
    loadChildren: 'app/equipment/equipment.module#EquipmentModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
