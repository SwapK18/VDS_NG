import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { PageServService } from "src/app/userPanel/shared/page-serv.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-update-img-two",
  templateUrl: "./update-img-two.component.html",
  styleUrls: ["./update-img-two.component.css"],
})
export class UpdateImgTwoComponent implements OnInit {
  vehRecID: any = null;
  imageSrc: any = null;
  udtImgTwoFrm: any = null;
  isSubmitted: any = false;

  constructor(
    private route: ActivatedRoute,
    private pageServ: PageServService,
    private httpc: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.vehRecID = params.vehRecID;
    });

    this.getImageTwo();

    this.udtImgTwoFrm = new FormGroup({
      image2: new FormControl("", [Validators.required]),
      fileSourceTwo: new FormControl("", [Validators.required]),
    });
  }

  onFileChange(p_num: number, event: any) {
    if (p_num === 2) {
      if (event.target.files.length > 0) {
        const imageTwo = event.target.files[0];
        this.udtImgTwoFrm.patchValue({
          fileSourceTwo: imageTwo,
        });
      }
    }
  }

  getImageTwo() {
    this.pageServ.getAllVehicals(this.vehRecID).subscribe((p_params) => {
      let datas = null;
      datas = p_params;
      this.imageSrc = datas[0].Vimage2;
    });
  }

  submit() {
    this.isSubmitted = true;
    if (this.udtImgTwoFrm.invalid) {
      return;
    }

    const udtImgTwoDta = new FormData();
    udtImgTwoDta.append("vehRecId", this.vehRecID);
    udtImgTwoDta.append(
      "imageTwo",
      this.udtImgTwoFrm.get("fileSourceTwo").value
    );

    this.httpc
      .post(
        "http://localhost/VehicalDisplaySystem/admin/chnageImgTwoREST.php",
        udtImgTwoDta
      )
      .subscribe((res) => {
        let dta: any = null;
        dta = res;
        if (dta.status === true) {
          this.alertConfirmation("success", dta.message, "center-end");
          this.refresh();
        } else {
          this.alertConfirmation("error", dta.message, "center-end");
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
  refresh(): void {
    window.location.reload();
  }
}
