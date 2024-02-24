import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.prod";
import { BehaviorSubject, catchError, tap, throwError } from "rxjs";
import { User } from "./user.model";

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
    user = new BehaviorSubject<User>(new User("", "", "", new Date())); // Default values

    constructor (private http: HttpClient) {}

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

    private handleAuthentication (email: string, userId: string, token: string, expireIn: number) {
        const expirationDate = new Date (new Date ().getTime () + expireIn * 1000);
        const user: User = new User (email, userId, token, expirationDate);

        this.user.next (user);
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