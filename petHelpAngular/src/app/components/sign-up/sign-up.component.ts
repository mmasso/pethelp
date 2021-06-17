import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public ngAuthService: AuthService) { }

  ngOnInit(): void {
  }

}
