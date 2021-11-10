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

  menuBtnChange() {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search");

    sidebar!.classList.toggle("open");
    if (sidebar!.classList.contains("open")) {
      closeBtn!.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    } else {
      closeBtn!.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
    }
  }

  ngOnInit(): void {
    this.isLoggedIn = this.ngAuthService.isLoggedIn;
  }

}
