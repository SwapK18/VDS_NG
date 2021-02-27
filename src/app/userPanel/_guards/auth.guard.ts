import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { TokenStorageService } from "../shared/token-storage.service";
import Swal from "sweetalert2/dist/sweetalert2.js";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenService: TokenStorageService
  ) {}

  canActivate() {
    if (!this.tokenService.isLoggedIn()) {
      this.alertConfirmation(
        "error",
        "You need to login to access this.",
        "top"
      );
      this.router.navigate([''])
      return false;
    } else {
      return true;
    }
  }

  alertConfirmation(p_typ = null, p_msg, p_pos = null) {
    Swal.fire({
      position: p_pos,
      icon: p_typ,
      text: p_msg,
      showConfirmButton: false,
      // timer: 3000,
      allowOutsideClick: true,
      showCloseButton: true,
      scrollbarPadding: true,
    });
  }
}
