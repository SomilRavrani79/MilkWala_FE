import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav} from '@angular/material/sidenav';
import { SharedModule } from '../../shared/shared.module';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatSidenav;
  isValidRoute: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (this.router.url == "/dashboard") {
        this.isValidRoute = true;
      } else {
        this.isValidRoute = false;
      }
    });

  }

  userName: string = 'IDL'
  userMO: number = 123456578
  userAdd: string = 'Surat'


  close() {
    this.drawer.close();
  }

  logout(){
    this.router.navigate(['/login']);
  }
}
