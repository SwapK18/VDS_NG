import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PageServService } from 'src/app/userPanel/shared/page-serv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-img-five',
  templateUrl: './update-img-five.component.html',
  styleUrls: ['./update-img-five.component.css']
})
export class UpdateImgFiveComponent implements OnInit {
  vehRecID: any = null;
  imageSrc: any = null;
  udtImgFiveFrm: any = null;
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

    this.getImageFive();

    this.udtImgFiveFrm = new FormGroup({
      image5: new FormControl("", [Validators.required]),
      fileSourceFive: new FormControl("", [Validators.required]),
    });
  }

  onFileChange(p_num: number, event: any) {
    if (p_num === 5) {
      if (event.target.files.length > 0) {
        const imageFive = event.target.files[0];
        this.udtImgFiveFrm.patchValue({
          fileSourceFive: imageFive,
        });
      }
    }
  }

  getImageFive() {
    this.pageServ.getAllVehicals(this.vehRecID).subscribe((p_params) => {
      let datas = null;
      datas = p_params;
      this.imageSrc = datas[0].Vimage5;
      console.log(this.imageSrc);
    });
  }

  submit() {
    this.isSubmitted = true;
    if (this.udtImgFiveFrm.invalid) {
      return;
    }

    const udtImgFiveDta = new FormData();
    udtImgFiveDta.append("vehRecId", this.vehRecID);
    udtImgFiveDta.append(
      "imageFive",
      this.udtImgFiveFrm.get("fileSourceFive").value
    );

    this.httpc
      .post(
        "http://localhost/VehicalDisplaySystem/admin/chnageImgFiveREST.php",
        udtImgFiveDta
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
