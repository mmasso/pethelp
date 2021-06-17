import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(public ngAuthService: AuthService) { }

  isLoggedIn = false;

  ngOnInit(): void {
    this.isLoggedIn = this.ngAuthService.isLoggedIn;
  }

}
