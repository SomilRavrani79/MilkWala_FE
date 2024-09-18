import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '../../shared/shared.module';
import { DeliveryBoy } from '../../Const/const';

@Component({
  selector: 'app-add-delivery-boy',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-delivery-boy.component.html',
  styleUrls: ['./add-delivery-boy.component.scss']
})
export class AddDeliveryBoyComponent {
  deliveryBoy: DeliveryBoy = { name: '', phone: '', email: '' };
  isEditMode = false;

  constructor(
    public dialogRef: MatDialogRef<AddDeliveryBoyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeliveryBoy | null
  ) {
    if (data) {
      this.isEditMode = true;
      this.deliveryBoy = { ...data };
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(dBoyForm: NgForm): void {
    if (dBoyForm.valid) {
      const dBoyData = {
        ...this.deliveryBoy,
        id: this.deliveryBoy.id || null
      };
      this.dialogRef.close(dBoyData);
    } else {
      console.log('Form is invalid');
    }
  }
}
