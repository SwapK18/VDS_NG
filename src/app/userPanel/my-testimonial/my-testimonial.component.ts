import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { PageServService } from "../shared/page-serv.service";
import { TokenStorageService } from "../shared/token-storage.service";

@Component({
  selector: "app-my-testimonial",
  templateUrl: "./my-testimonial.component.html",
  styleUrls: ["./my-testimonial.component.css"],
})
export class MyTestimonialComponent implements OnInit {
  allTesti: any[] = null;
  emailId: string = null;

  constructor(
    private pgServ: PageServService,
    private tokenServ: TokenStorageService
  ) {}

  ngOnInit() {
    this.emailId = this.tokenServ.getUser().email;
    this.loadAllTesti();
    console.log(this.emailId);

  }

  loadAllTesti() {
    this.pgServ.getAllTestimonial().subscribe((resp) => {
      let dataz = null;
      dataz = resp;
      if (dataz.status === true) {
        this.allTesti = dataz.data;
        console.log(this.allTesti);
      } else {
        console.log(dataz.message);
      }
    });
  }
}
