import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PageServService } from '../shared/page-serv.service';
import { TokenStorageService } from '../shared/token-storage.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css'],
})
export class MyBookingComponent implements OnInit {
  allBookings:any = null;
  emailId: string = null;

    
  constructor(private tokenServ: TokenStorageService,private pgServ:PageServService) {}

  ngOnInit() {
    this.emailId = this.tokenServ.getUser().email;
    this.loadAllBookings();
  }

  loadAllBookings(){
    this.pgServ.getAllBookings(this.emailId).subscribe((resp)=>{
      let dataResp  = null;
      dataResp = resp;
      if(dataResp.status === true){
        this.allBookings = dataResp.data;
        console.log(this.allBookings);
      }else{
        this.alertConfirmation('error', dataResp.message, 'top-center');
      }
    })
  }

  alertConfirmation(p_typ = null, p_msg, p_pos = null) {
    Swal.fire({
      position: p_pos,
      icon: p_typ,
      title: "Bookings information",
      text: p_msg,
      showConfirmButton: false,
      timer: 3000,
      showCloseButton: true,
      scrollbarPadding: true,
    });
  }
}
