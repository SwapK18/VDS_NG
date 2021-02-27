import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router
} from "@angular/router";
import { AdminTokenStorageService } from "../_shared/admin-token-storage.service";

@Injectable({
  providedIn: "root",
})
export class AdminAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private adminTokenService: AdminTokenStorageService
  ) {}

  canActivate() {
    if (!this.adminTokenService.isLoggedIn()) {
      this.router.navigate(["admin/"]);
      alert("You need to login first to access this page.");
      return false;
    } else {
      return true;
    }
  }
}
