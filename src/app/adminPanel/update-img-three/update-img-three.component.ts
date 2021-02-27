import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { PageServService } from "src/app/userPanel/shared/page-serv.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-update-img-three",
  templateUrl: "./update-img-three.component.html",
  styleUrls: ["./update-img-three.component.css"],
})
export class UpdateImgThreeComponent implements OnInit {
  vehRecID: any = null;
  imageSrc: any = null;
  udtImgThreeFrm: any = null;
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

    this.getImageThree();

    this.udtImgThreeFrm = new FormGroup({
      image3: new FormControl("", [Validators.required]),
      fileSourceThree: new FormControl("", [Validators.required]),
    });
  }

  onFileChange(p_num: number, event: any) {
    if (p_num === 4) {
      if (event.target.files.length > 0) {
        const imageThree = event.target.files[0];
        this.udtImgThreeFrm.patchValue({
          fileSourceThree: imageThree,
        });
      }
    }
  }

  getImageThree() {
    this.pageServ.getAllVehicals(this.vehRecID).subscribe((p_params) => {
      let datas = null;
      datas = p_params;
      this.imageSrc = datas[0].Vimage4;
      console.log(this.imageSrc);
    });
  }

  submit() {
    this.isSubmitted = true;
    if (this.udtImgThreeFrm.invalid) {
      return;
    }

    const udtImgThreeDta = new FormData();
    udtImgThreeDta.append("vehRecId", this.vehRecID);
    udtImgThreeDta.append(
      "imageThree",
      this.udtImgThreeFrm.get("fileSourceThree").value
    );

    this.httpc
      .post(
        "http://localhost/VehicalDisplaySystem/admin/chnageImgThreeREST.php",
        udtImgThreeDta
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
