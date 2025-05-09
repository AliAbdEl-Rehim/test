import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ItemFormComponent,
    AddItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }