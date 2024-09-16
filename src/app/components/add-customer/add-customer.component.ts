import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from '../../Services/common-service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.scss'
})
export class AddCustomerComponent {
  Name = '';
  Phone = '';
  Email = '';
  Id = '';
  IsEditmode = false;

  constructor(
    public dialogRef: MatDialogRef<AddCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private commonService: CommonService
  ) {
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

  onSave(customerForm: NgForm): void {
    if (customerForm.valid) {
      const customerData = {
        Name: this.Name,
        Phone: this.Phone,
        Email: this.Email,
        Id: this.Id || null
      };
      this.addOrUpdateCustomer(customerData);
    } else {
      // Add logic here if you want to highlight form errors or notify user
      console.log('Form is invalid');
    }
  }

  addOrUpdateCustomer(customerData: any): void {
    this.commonService.addOrUpdateCustomer(customerData).subscribe((data) => {
      if (data.data) {
        this.dialogRef.close();
      }
    });
  }
}
