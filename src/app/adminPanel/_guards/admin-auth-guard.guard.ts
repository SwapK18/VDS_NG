import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminTokenStorageService } from '../_shared/admin-token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardGuard implements CanActivate {

  constructor(private router: Router,private adminTokenServ: AdminTokenStorageService){ 
  }

  canActivate() {
    if (!this.adminTokenServ.isLoggedIn()) {
      alert('You need to login first to access this page.');
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }

  
}
