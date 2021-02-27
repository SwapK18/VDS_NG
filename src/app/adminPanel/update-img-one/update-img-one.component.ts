import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { PageServService } from "src/app/userPanel/shared/page-serv.service";
import Swal from 'sweetalert2';

@Component({
  selector: "app-update-img-one",
  templateUrl: "./update-img-one.component.html",
  styleUrls: ["./update-img-one.component.css"],
})
export class UpdateImgOneComponent implements OnInit {
  vehRecID: any = null;
  imageSrc: any = null;
  udtImgOneFrm: any = null;
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

    this.getImageOne();

    this.udtImgOneFrm = new FormGroup({
      image1: new FormControl("", [Validators.required]),
      fileSourceOne: new FormControl("", [Validators.required]),
    });
  }

  onFileChange(p_num: number, event: any) {
    if (p_num === 1) {
      if (event.target.files.length > 0) {
        const imageOne = event.target.files[0];
        this.udtImgOneFrm.patchValue({
          fileSourceOne: imageOne,
        });
      }
    }
  }

  getImageOne() {
    this.pageServ.getAllVehicals(this.vehRecID).subscribe((p_params) => {
      let datas = null;
      datas = p_params;
      this.imageSrc = datas[0].Vimage1;
      console.log(this.imageSrc);
    });
  }

  submit() {
    this.isSubmitted = true;
    if (this.udtImgOneFrm.invalid) {
      return;
    }

    const udtImgOneDta = new FormData();
    udtImgOneDta.append("vehRecId", this.vehRecID);
    udtImgOneDta.append(
      "imageOne",
      this.udtImgOneFrm.get("fileSourceOne").value
    );

    this.httpc
      .post(
        "http://localhost/VehicalDisplaySystem/admin/chnageImgOneREST.php",
        udtImgOneDta
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
