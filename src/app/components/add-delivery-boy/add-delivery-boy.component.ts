import { Component, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-add-delivery-boy',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-delivery-boy.component.html',
  styleUrl: './add-delivery-boy.component.scss'
})
export class AddDeliveryBoyComponent {
  Name = '';
  Phone = '';
  Email = '';
  Id = '';
  IsEditmode = false;

  constructor(public dialogRef: MatDialogRef<AddDeliveryBoyComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {
  if (data) {
    this.IsEditmode = true;
    this.Name = data.name;
    this.Phone = data.phone;
    this.Email = data.email;
    this.Id = data.id;
  }
}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(dBoyForm: NgForm): void {
    if (dBoyForm.valid) {
      const dBoyData = {
      Name: this.Name,
      Phone: this.Phone,
      Email: this.Email,
      Id: this.Id || null
    };
    this.dialogRef.close(dBoyData);
  }
}
}
