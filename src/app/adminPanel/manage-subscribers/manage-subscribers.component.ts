import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { AdminAuthService } from "../_shared/admin-auth.service";

@Component({
  selector: "app-manage-subscribers",
  templateUrl: "./manage-subscribers.component.html",
  styleUrls: ["./manage-subscribers.component.css"],
})
export class ManageSubscribersComponent implements OnInit {
  allSubscribers: any = null;

  constructor(private adminAuthServ: AdminAuthService) {}

  ngOnInit(): void {
    this.getAllSubscribers();
  }

  getAllSubscribers() {
    this.adminAuthServ.getAllSubscribers().subscribe((p_data) => {
      let thisData: any = null;
      thisData = p_data;
      this.allSubscribers = thisData.data;
      console.log(this.allSubscribers);
    });
  }

  delSubscriber(p_subRecId) {
    this.adminAuthServ.deleteSubscriber(p_subRecId).subscribe((p_data) => {
      let thisData: any = null;
      thisData = p_data;
      if (thisData.status === true) {
        this.alertConfirmation("success", thisData.message, "center-end");
        setInterval(function () {
          window.location.reload();
        }, 5000);
      } else {
        this.alertConfirmation("error", thisData.message, "center-end");
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
