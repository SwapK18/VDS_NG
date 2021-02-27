import { Component, Inject, OnInit } from "@angular/core";
import { AdminAuthService } from "src/app/adminPanel/_shared/admin-auth.service";
import { PageServService } from "../shared/page-serv.service";

@Component({
  selector: "app-homepg",
  templateUrl: "./homepg.component.html",
  styleUrls: ["homepg.component.css"],
})
export class HomepgComponent implements OnInit {
  allCars: any;
  allTestimonials: any = null;

  constructor(
    private pageServ: PageServService,
    private adminServ: AdminAuthService
  ) {}

  ngOnInit() {
    this.getAllCars();
    this.adminServ.getAllTestimonials().subscribe((resp) => {
      let dataForm: any = null;
      dataForm = resp;
      this.allTestimonials = dataForm.data;
    });
  }
  
  getAllCars() {
    this.allCars = [];
    this.pageServ.getAllCars(3).subscribe((data) => {
      let dataForm: any = null;
      dataForm = data;
      if (dataForm.status === true) {
        this.allCars = dataForm.data;
      } else if (dataForm.status === false) {
        console.log(dataForm.message);
      }
    });
  }
}
