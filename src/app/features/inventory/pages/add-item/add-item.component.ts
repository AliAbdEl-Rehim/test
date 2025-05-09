import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ItemService } from '../../../../core/services/item.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  constructor(
    private itemService: ItemService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}
  
  onSaveItem(item: Item): void {
    this.itemService.saveItem(item).subscribe({
      next: () => {
        this.snackBar.open('تم حفظ الصنف بنجاح', 'إغلاق', { 
          duration: 3000,
          direction: 'rtl'
        });
      },
      error: (error) => {
        console.error('Error saving item', error);
        this.snackBar.open('حدث خطأ أثناء حفظ الصنف', 'إغلاق', { 
          duration: 3000,
          direction: 'rtl'
        });
      }
    });
  }
  
  onDeleteItem(): void {
    this.snackBar.open('تم حذف الصنف بنجاح', 'إغلاق', { 
      duration: 3000,
      direction: 'rtl'
    });
  }
}