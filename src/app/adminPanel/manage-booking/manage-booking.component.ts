import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { AdminAuthService } from "../_shared/admin-auth.service";

@Component({
  selector: "app-manage-booking",
  templateUrl: "./manage-booking.component.html",
  styleUrls: ["./manage-booking.component.css"],
})
export class ManageBookingComponent implements OnInit {
  allBookings: any[] = null;
  constructor(private adminAuthServ: AdminAuthService) {}

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings() {
    this.adminAuthServ.getAllBookings().subscribe((p_data) => {
      let datas = null;
      datas = p_data;
      if (datas.status === true) {
        this.allBookings = datas.data;
      } else {
        console.log(datas.message);
      }
    },
    (error) => {                              //Error callback
      console.warn('error caught in component')
      this.alertConfirmation('error', error, 'top-center');

    });
  }

  bookingAction(p_action, p_bookingRecId) {
    this.adminAuthServ
      .actionBooking(p_action, p_bookingRecId)
      .subscribe((res) => {
        let data = null;
        data = res;
        if (data.status == true) {
          this.alertConfirmation("success", data.message, "center-end");
          setInterval(function () {
            window.location.reload();
          }, 5000);
        } else {
          this.alertConfirmation("error", data.message, "center-end");
          setInterval(function () {
            window.location.reload();
          }, 5000);
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
