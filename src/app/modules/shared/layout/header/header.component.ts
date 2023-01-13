import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { ScheduleDialogComponent } from 'src/app/modules/pages/bloodBanks/schedule-dialog/schedule-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;
  userRole: string = '';

  constructor(private authService: AuthService,private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.authService.loginObserver.subscribe((val) => {
      this.isLogged = val;
      this.userRole = this.authService.getUserRole();
    });
  }

  public schedule() {
    this.dialog.open(ScheduleDialogComponent, {
      width: '50%',
      height: '80%'
    })
  }

  logout(): void {
    this.authService.logout();
    this.userRole = '';
  }

}
