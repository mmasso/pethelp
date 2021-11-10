import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth/auth.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public ngAuthService: AuthService) { }

  ngOnInit(): void {
  }

}
