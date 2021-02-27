import { Component, OnInit } from "@angular/core";
import { PageServService } from "../shared/page-serv.service";

@Component({
  selector: "app-contactus",
  templateUrl: "./contactus.component.html",
  styleUrls: ["./contactus.component.css"],
})

export class ContactusComponent implements OnInit {
  form: any = {};
  successMessage: string = "";
  isSuccessful: boolean = false;

  constructor(private pageService: PageServService) {}

  ngOnInit() {}

  onSubmit() {
    let formData: any = "";
    this.pageService.processContactQuery(this.form).subscribe((data) => {
      formData = data;
      if (formData.status === true) {
        alert(formData.message);
      } else if (formData.status === false) {
        alert(formData.message);
      }
    });
  }
}
