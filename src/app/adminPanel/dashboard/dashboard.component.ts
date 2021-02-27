import { Component, OnInit } from "@angular/core";
import { AdminServiceService } from "../_shared/admin-service.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  userCnt = 0;
  Vehicals = 0;
  Booking = 0;
  Subscribers = 0;
  ContactusQuery = 0;
  Testimonial = 0;
  Brands = 0;

  constructor(private adminserv: AdminServiceService) {}

  ngOnInit(): void {
    this.getUsersCount();
    this.getVehicalsCount();
    this.getBookingsCount();
    this.getSubscribersCount();
    this.getContactusQueryCount();
    this.getTestimonialCount();
    this.getBrandsCount();
  }

  getUsersCount() {
    this.adminserv.getAllData("users").subscribe((p_dta) => {
      var allUDtas = null;
      allUDtas = p_dta;
      this.userCnt = allUDtas.counts;
    });
  }

  getVehicalsCount() {
    this.adminserv.getAllData("vehicals").subscribe((p_dta) => {
      var allVDtas = null;
      allVDtas = p_dta;
      this.Vehicals = allVDtas.counts;
    });
  }

  getBookingsCount() {
    this.adminserv.getAllData("booking").subscribe((p_dta) => {
      var allBDtas = null;
      allBDtas = p_dta;
      this.Booking = allBDtas.counts;
    });
  }

  getBrandsCount() {
    this.adminserv.getAllData("brands").subscribe((p_dta) => {
      var allBrndDtas = null;
      allBrndDtas = p_dta;
      this.Brands = allBrndDtas.counts;
    });
  }

  getSubscribersCount() {
    this.adminserv.getAllData("subscribers").subscribe((p_dta) => {
      var allSDtas = null;
      allSDtas = p_dta;
      this.Subscribers = allSDtas.counts;
    });
  }

  getContactusQueryCount() {
    this.adminserv.getAllData("contactusquery").subscribe((p_dta) => {
      var allCDtas = null;
      allCDtas = p_dta;
      this.ContactusQuery = allCDtas.counts;
    });
  }

  getTestimonialCount() {
    this.adminserv.getAllData("testimonial").subscribe((p_dta) => {
      var allTDtas = null;
      allTDtas = p_dta;
      this.Testimonial = allTDtas.counts;
    });
  }
}
