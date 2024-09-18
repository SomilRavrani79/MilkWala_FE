import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../Const/const';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
   this.loadMenuItems();
  }

  private loadMenuItems(): void {
    this.http.get<MenuItem[]>('assets/menu-items.json').subscribe({
      next: (data) => {
        this.menuItems = data;
      },
      error: (err) => {
        console.error('Failed to load menu items', err);
      }
    });
  }
  
  goToSection(path : any) {
    path = `menu/${path}`;
    this.router.navigate([path]);
  }
}
