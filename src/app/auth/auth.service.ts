import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.prod";
import { BehaviorSubject, catchError, tap, throwError } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";

export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered: boolean;
} // AuthResponseData

@Injectable ({providedIn: 'root'})
export class AuthService {
    private tokenExpirationTimer: any;
    user = new BehaviorSubject<User>(new User("", "", "", new Date())); // Default values

    constructor (private http: HttpClient, private router: Router) {}

    login (email: string, password: string) {
        return this.http.post<AuthResponseData> ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIkey,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
        .pipe (
            catchError (this.handleError),
            tap (responseData => {
                this.handleAuthentication (
                    responseData.email,
                    responseData.localId,
                    responseData.idToken,
                    +responseData.expiresIn
                )
            })
        );
    } // login

    logout () {
        this.user.next (new User("", "", "", new Date()));
        this.router.navigate (['/auth']);
        localStorage.removeItem ('userData');

        if (this.tokenExpirationTimer) {
            clearTimeout (this.tokenExpirationTimer);
        } // if

        this.tokenExpirationTimer = null;
    } // logout

    autoLogin () {
        const localStorageUserData = localStorage.getItem ('userData');
        if (!localStorageUserData) { this.router.navigate (['/auth']); return; }

        const userData: {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string
        } = JSON.parse (localStorageUserData);

        const loadedUser: User = new User (userData.email, userData.id, userData._token, new Date (userData._tokenExpirationDate));

        if (loadedUser.token) {
            this.user.next (loadedUser);
            const expirationDate = new Date (userData._tokenExpirationDate).getTime () - new Date ().getTime ();
            this.autoLogout (expirationDate);
        } // if
    } // autoLogin

    autoLogout (expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout (() => {
            // this.logout ();
        }, expirationDuration)
    } // autoLogout

    private handleAuthentication (email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date (new Date ().getTime () + expiresIn * 1000);
        const user: User = new User (email, userId, token, expirationDate);

        this.user.next (user);
        this.autoLogout (expiresIn * 1000);
        localStorage.setItem ('userData', JSON.stringify (user));
    } // handleAuthentication

    private handleError (errorResponse: HttpErrorResponse) {
        let errorMessage = 'Unknown error';
        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError (() => new Error (errorMessage));
        } // if

        switch (errorResponse.error.error.message) {
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exits'
                break;
            case 'INVALID_LOGIN_CREDENTIALS':
                errorMessage = 'Invalid login credentials'
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Password not valid'
                break;
            default:
                errorMessage = errorResponse.error.error.message;
        } // switch

        return throwError (() => new Error (errorMessage));
    } // handleError
} // AuthService