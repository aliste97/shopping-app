import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor (private authService: AuthService) {}

  ngOnInit (): void {
    this.authService.user.subscribe (
      (user) => { 
        this.isAuthenticated = !!user.token }
    );
  } // ngOnInit

  onLogout () {
    this.authService.logout ();
  } // onLogout
} // HeaderComponent
