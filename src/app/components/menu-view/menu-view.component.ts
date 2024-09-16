import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-view',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu-view.component.html',
  styleUrl: './menu-view.component.scss'
})
export class MenuViewComponent {

}
