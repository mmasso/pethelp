import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth/auth.service";


@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  constructor(public ngAuthService: AuthService) { }

  ngOnInit(): void {
  }

}
