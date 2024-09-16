import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CommonService } from '../../Services/common-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedModule } from '../../shared/shared.module';



@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {
  constructor(private location: Location, private dialog: MatDialog, private commonService: CommonService, private snackBar: MatSnackBar) { }

  searchTerm: string = '';
  Customers: any;
  totalRecords = 0;

  ngOnInit(): void {
    this.getCustomers();
  }

  onSearch(searchTerm: any): void {
    if (searchTerm) {
      this.Customers = this.Customers.filter((customer: any) =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()))
    } else {
      this.getCustomers();
    }
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'bottom',
    });
  }

  getCustomers(): void {
    this.commonService.getCustomers().subscribe((data) => {
      this.Customers = data.data;
      this.totalRecords = data.data.length;
    },
    );
  }

  

  editCustomer(customer: any): void {
    this.addCustomerDialog(customer);
  }

  addCustomerDialog(customer?: any): void {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '300px',
      data: customer
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCustomers();
    });
  }

  deleteCustomer(id: number) {
    const isConfirmed = confirm('Are you sure you want to delete this Customer?');
    if (isConfirmed) {
      this.commonService.deleteCustomer(id).subscribe((data) => {
        if (data.data) {
          this.getCustomers();
        };
      },
      );
    }
  }


  goBack(): void {
    this.location.back();
  }
}
