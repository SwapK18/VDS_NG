import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PageServService } from "src/app/userPanel/shared/page-serv.service";
import Swal from "sweetalert2";
import { AdminServiceService } from "../_shared/admin-service.service";

@Component({
  selector: "app-manage-brand",
  templateUrl: "./manage-brand.component.html",
  styleUrls: ["./manage-brand.component.css"],
})
export class ManageBrandComponent implements OnInit {
  allBrands: any = null;
  brandID: any = null;

  constructor(
    private router: Router,
    private adminServ: AdminServiceService,
    private pageServ: PageServService
  ) {}

  ngOnInit(): void {
    this.loadAllBrands();
  }

  loadAllBrands() {
    this.pageServ.getAllVehBrands().subscribe((p_dta) => {
      this.allBrands = p_dta;
    });
  }

  editBrands(p_brndId) {
    this.adminServ.editBrands(p_brndId);
    this.router.navigate(["/admin/updateBrand", { brndid: p_brndId }]);
  }

  deleteElement(p_id) {
    this.adminServ.deleteElems("Brand", p_id).subscribe((p_dta) => {
      let data = null;
      data = p_dta;
      if (data.status === true) {
        this.alertConfirmation("success", data.message, "center-end");
      } else {
        this.alertConfirmation("success", data.message, "center-end");
      }
      this.loadAllBrands();
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
