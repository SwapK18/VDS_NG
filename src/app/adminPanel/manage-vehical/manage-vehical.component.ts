import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageServService } from 'src/app/userPanel/shared/page-serv.service';
import Swal from 'sweetalert2';
import { AdminServiceService } from '../_shared/admin-service.service';

@Component({
  selector: 'app-manage-vehical',
  templateUrl: './manage-vehical.component.html',
  styleUrls: ['./manage-vehical.component.css']
})
export class ManageVehicalComponent implements OnInit {
  allVechls: any = null;
  brandID: any = null;

  constructor(private pageServ: PageServService,private router: Router,
    private adminServ: AdminServiceService) { }

  editBrands(p_vehId) {
    this.adminServ.editBrands(p_vehId);
    this.router.navigate(["/admin/updateVeh", { vehid: p_vehId }]);
  }

  ngOnInit(): void {
    this.loadAllVehicals();
  }
  loadAllVehicals() {
    this.pageServ.getAllVehicals().subscribe((p_dta) => {
      this.allVechls = p_dta;
    console.log(this.allVechls);

    });
  }

  deleteElement(p_id) {
    this.adminServ.deleteElems("Vehical", p_id).subscribe((p_dta) => {
      let data = null;
      data = p_dta;
      if (data.status === true) {
        this.alertConfirmation("success", data.message, "center-end");
      } else {
        this.alertConfirmation("success", data.message, "center-end");
      }
      this.loadAllVehicals();
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
