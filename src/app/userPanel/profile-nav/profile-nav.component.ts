import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../shared/token-storage.service';

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.css']
})
export class ProfileNavComponent implements OnInit {

  constructor(private tokenServ: TokenStorageService) { }

  ngOnInit() {
  }


  logOut(){
    this.tokenServ.signOut();
    window.location.reload();
  }
}
