import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnDestroy {
  isLoading: boolean = false;
  private closeSub!: Subscription;
  @ViewChild (PlaceholderDirective, { static: true }) alertHost!: PlaceholderDirective;

  constructor (private authService: AuthService, private router: Router) { }

  onSubmit (authForm: NgForm) {
    if (!authForm.valid) {
      return;
    } // if

    const email: string = authForm.value.email;
    const password: string = authForm.value.password;

    this.isLoading = true;

    this.authService.login (email, password).subscribe ({
      next: (responseData) => {
        console.log (responseData);
        this.isLoading = false;
        // Navigate on shopping list component
        this.router.navigate (['/shopping-list'])
      },
      error: (errorMessage) => {
        this.isLoading = false;
        // Manage error
        this.showErrorAlert (errorMessage);
      }
    });

    authForm.reset ();
  } // onSubmit

  private showErrorAlert (message: string) {
    const componentRef = this.alertHost.viewContainerRef.createComponent (AlertComponent);
    componentRef.instance.message = message;

    this.closeSub = componentRef.instance.close.subscribe (() => { 
      this.closeSub.unsubscribe ();
      this.alertHost.viewContainerRef.clear ();
    });
  } // showErrorAlert

  ngOnDestroy (): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe ();
    } // if
  } // ngOnDestroy
} // AuthComponent
