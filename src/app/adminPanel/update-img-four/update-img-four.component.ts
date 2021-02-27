import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { PageServService } from "src/app/userPanel/shared/page-serv.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-update-img-four",
  templateUrl: "./update-img-four.component.html",
  styleUrls: ["./update-img-four.component.css"],
})
export class UpdateImgFourComponent implements OnInit {
  vehRecID: any = null;
  imageSrc: any = null;
  udtImgFourFrm: any = null;
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

    this.getImageFour();

    this.udtImgFourFrm = new FormGroup({
      image4: new FormControl("", [Validators.required]),
      fileSourceFour: new FormControl("", [Validators.required]),
    });
  }

  onFileChange(p_num: number, event: any) {
    if (p_num === 4) {
      if (event.target.files.length > 0) {
        const imageFour = event.target.files[0];
        this.udtImgFourFrm.patchValue({
          fileSourceFour: imageFour,
        });
      }
    }
  }

  getImageFour() {
    this.pageServ.getAllVehicals(this.vehRecID).subscribe((p_params) => {
      let datas = null;
      datas = p_params;
      this.imageSrc = datas[0].Vimage4;
      console.log(this.imageSrc);
    });
  }

  submit() {
    this.isSubmitted = true;
    if (this.udtImgFourFrm.invalid) {
      return;
    }

    const udtImgFourDta = new FormData();
    udtImgFourDta.append("vehRecId", this.vehRecID);
    udtImgFourDta.append(
      "imageFour",
      this.udtImgFourFrm.get("fileSourceFour").value
    );

    this.httpc
      .post(
        "http://localhost/VehicalDisplaySystem/admin/chnageImgFourREST.php",
        udtImgFourDta
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
