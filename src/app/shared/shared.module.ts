import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router'; 
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbar,
    MatIconModule,
    MatSlideToggleModule,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavModule,
    MatNavList,
    MatIcon,
    RouterModule,
    MatIconButton,
    MatDialogModule,
    MatListModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatIcon,
    MatIconButton,
    MatSlideToggleModule,
    MatToolbar,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavModule,
    MatNavList,
    RouterModule,
    MatDialogModule
  ]
})
export class SharedModule { }
