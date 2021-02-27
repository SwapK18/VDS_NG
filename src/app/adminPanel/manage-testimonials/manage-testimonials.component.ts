import { Component, OnInit } from "@angular/core";
import Swal from 'sweetalert2';
import { AdminAuthService } from "../_shared/admin-auth.service";

@Component({
  selector: "app-manage-testimonials",
  templateUrl: "./manage-testimonials.component.html",
  styleUrls: ["./manage-testimonials.component.css"],
})
export class ManageTestimonialsComponent implements OnInit {
  allTestimonials: any[] = null;
  constructor(private adminAuthServ: AdminAuthService) {}

  ngOnInit(): void {
    this.getAllTestimonials();
  }

  getAllTestimonials() {
    this.adminAuthServ.getAllTestimonials().subscribe((p_data) => {
      let datas = null;
      datas = p_data;
      this.allTestimonials = datas.data;

      console.log(this.allTestimonials);
    });
  }

  editTestiStatus(p_act, p_tesitRecId){
    this.adminAuthServ.editTestimonialStatus(p_act, p_tesitRecId).subscribe((resp)=>{
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
