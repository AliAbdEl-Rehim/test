import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './pages/add-item/add-item.component';

const routes: Routes = [
  { path: 'add', component: AddItemComponent },
  { path: '', redirectTo: 'add', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }