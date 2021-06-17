import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { AuthService } from "../../service/auth/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {

  constructor(
    public ngAuthService: AuthService,
    private router: Router
  ) { }

  ngOnInit() { 
  }
}
