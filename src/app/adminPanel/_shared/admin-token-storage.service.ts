import { Injectable } from '@angular/core';

const TOKEN_KEY = "admin-auth-token";
const USER_KEY = "admin-auth-user";

@Injectable({
  providedIn: 'root'
})
export class AdminTokenStorageService {

  constructor() { }
  
  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

   // Checking if token is set
   public isLoggedIn() {
    return sessionStorage.getItem('admin-auth-token') != null;
  }
}


