import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminAuthService } from '../_shared/admin-auth.service';

@Component({
  selector: 'app-manage-contact-query',
  templateUrl: './manage-contact-query.component.html',
  styleUrls: ['./manage-contact-query.component.css']
})
export class ManageContactQueryComponent implements OnInit {
  allContactQry: any[] = null;

  constructor(private adminAuthServ: AdminAuthService) { }

  ngOnInit(): void {
    this.loadContactQry();
  }

  loadContactQry(){
    this.adminAuthServ.getAllContactQry().subscribe((p_data) => {
      let datas = null;
      datas = p_data;
      this.allContactQry = datas.data;

      console.log(this.allContactQry);
    });
  }

  editContactQryStatus(p_act, p_tesitRecId){
    this.adminAuthServ.editContactQryStatus(p_act, p_tesitRecId).subscribe((resp)=>{
      let data = null;
      data = resp;
      
      if (data.status == true) {
        this.alertConfirmation("success", data.message, "center-end");
        setInterval(function(){ window.location.reload(); }, 5000);
      } else {
        this.alertConfirmation("error", data.message, "center-end");
        setInterval(function(){ window.location.reload(); }, 5000);
      }
    });
  }

  alertConfirmation(p_typ, p_msg, p_pos = null) {
    Swal.fire({
      position: p_pos,
      icon: p_typ,
      text: p_msg,
      showConfirmButton: false,
      timer: 5000,
    });
  }
}
