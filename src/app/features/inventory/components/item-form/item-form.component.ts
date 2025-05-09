import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  @Output() saveItem = new EventEmitter<Item>();
  @Output() deleteItem = new EventEmitter<void>();
  
  itemForm!: FormGroup;
  
  stores: string[] = ['المخزن الرئيسي', 'مخزن الأدوية', 'مخزن المعدات'];
  subStores: string[] = ['فرع 1', 'فرع 2', 'فرع 3'];
  stations: string[] = ['المحطة الحضرية', 'المحطة الريفية', 'محطة المركز'];
  units: string[] = ['قطعة', 'علبة', 'كيلوجرام', 'لتر'];
  itemTypes: string[] = ['أدوات', 'أدوية', 'مستهلكات', 'معدات'];
  
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}
  
  ngOnInit(): void {
    this.initForm();
  }
  
  private initForm(): void {
    this.itemForm = this.fb.group({
      store: ['', Validators.required],
      subStore: [''],
      station: [''],
      unit: [''],
      itemName: ['', Validators.required],
      itemNumber: ['', Validators.required],
      itemType: [''],
      orderLimit: [''],
      expiryDate: [null],
      creationDate: [new Date()]
    });
  }
  
  onSubmit(): void {
    if (this.itemForm.invalid) {
      this.snackBar.open('يرجى ملء جميع الحقول المطلوبة', 'إغلاق', {
        duration: 3000,
        direction: 'rtl'
      });
      return;
    }
    
    this.saveItem.emit(this.itemForm.value);
  }
  
  onReset(): void {
    this.itemForm.reset({
      creationDate: new Date()
    });
  }
  
  onDelete(): void {
    this.deleteItem.emit();
  }
}