import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {const} from '/'



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit {
  menuItems: any;
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/menu-items.json').subscribe(data => {
      this.menuItems = data;
    });
  }

  goToSection(path : any) {
    path = `menu/${path}`;
    this.router.navigate([path]);
  }
}
