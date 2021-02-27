import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../_shared/admin-auth.service';

@Component({
  selector: 'app-registerd-users',
  templateUrl: './registerd-users.component.html',
  styleUrls: ['./registerd-users.component.css']
})
export class RegisterdUsersComponent implements OnInit {
  allUsers: any = null;
  constructor(private adminAuthServ: AdminAuthService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.adminAuthServ.getAllUsersRegistered().subscribe((p_data)=>{
      let thisData:any = null;
      thisData = p_data;
      this.allUsers = thisData.data;
    });
  }
}
