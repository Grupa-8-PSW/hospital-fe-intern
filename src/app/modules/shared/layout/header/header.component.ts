import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;
  userRole: string = '';

  constructor(private authService: AuthService) { 
  }

  ngOnInit(): void {
    this.authService.loginObserver.subscribe((val) => {
      this.isLogged = val;
      this.userRole = this.authService.getUserRole();
    });
  }

  logout(): void {
    this.authService.logout();
    this.userRole = '';
  }

}
