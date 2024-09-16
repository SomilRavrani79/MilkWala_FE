import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../../Services/common-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { AddDeliveryBoyComponent } from '../add-delivery-boy/add-delivery-boy.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-delivery-boy',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './delivery-boy.component.html',
  styleUrl: './delivery-boy.component.scss'
})
export class DeliveryBoyComponent {
  constructor(private location: Location, private dialog: MatDialog, private commonService: CommonService, private snackBar: MatSnackBar) { }

  searchTerm: string = '';
  DeliveryBoys: any;
  totalRecords= 0;

  ngOnInit(): void {
    this.getdeliveryboys();
  }

  onSearch(): void {
    if (this.searchTerm) {
      this.DeliveryBoys = this.DeliveryBoys.filter((dboys: any) =>
        dboys.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
    } else {
      this.getdeliveryboys();
    }
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'bottom',
    });
  }

  getdeliveryboys(): void {
    this.commonService.getdeliveryBoys().subscribe((data) => {
      this.DeliveryBoys = data.data;
      this.totalRecords = data.data.length
    },
    );
  }

  addOrUpdatedeliveryBoys(dboysData: any): void {
    this.commonService.addOrUpdatedeliveryBoy(dboysData).subscribe((data) => {
      if (data.data) {
        this.getdeliveryboys();
        this.showSnackbar(data.message);
      };
    },
    );
  }

  editDeliveryBoyRecord(dboysData: any): void {
    this.addDeliveryBoysDialog(dboysData);
  }

  addDeliveryBoysDialog(dboysData?: any): void {
    const dialogRef = this.dialog.open(AddDeliveryBoyComponent, {
      width: '300px',
      data: dboysData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addOrUpdatedeliveryBoys(result);
      }
    });
  }

  deleteDeliveryBoyRecord(id: number) {
    const isConfirmed = confirm('Are you sure you want to delete this Delivery Boy?');
    if (isConfirmed) {
      this.commonService.deletedeliveryBoy(id).subscribe((data) => {
        if (data.data) {
          this.getdeliveryboys();
        };
      },
      );
    }
  }


  goBack(): void {
    this.location.back();
  }
}
