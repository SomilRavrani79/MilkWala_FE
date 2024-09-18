import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from '../../Services/common-service';
import { SharedModule } from '../../shared/shared.module';
import { CustomerData } from '../../Const/const';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.scss'
})
export class AddCustomerComponent {
  customerData: CustomerData = {
    name: '',
    phone: '',
    email: '',
  };
  isEditMode = false;

  constructor(
    public dialogRef: MatDialogRef<AddCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private commonService: CommonService
  ) {
    if (data) {
      this.isEditMode = true;
      this.customerData = { ...data };
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(customerForm: NgForm): void {
    if (customerForm.valid) {
      this.addOrUpdateCustomer(this.customerData);
    } else {
      console.log('Form is invalid');
    }
  }

  private addOrUpdateCustomer(customerData: CustomerData): void {
    this.commonService.addOrUpdateCustomer(customerData).subscribe({
      next: (response) => {
        if (response.data) {
          this.dialogRef.close();
        }
      },
      error: (err) => {
        console.error('Failed to save customer data', err);
      }
    });
  }
}
