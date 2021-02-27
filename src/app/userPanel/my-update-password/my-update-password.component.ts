import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { AuthService } from "../shared/auth.service";
import { TokenStorageService } from "../shared/token-storage.service";
import { MustMatch } from "../_helpers/must-match.validator";

@Component({
  selector: "app-my-update-password",
  templateUrl: "./my-update-password.component.html",
  styleUrls: ["./my-update-password.component.css"],
})
export class MyUpdatePasswordComponent implements OnInit {
  updatePassForm: FormGroup;
  isSubmitted = false;
  isPassUpdate = false;
  isPassUpdateFailed = false;
  errorMessage = "";
  userEmail: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private authSer: AuthService,
    private tokenServ: TokenStorageService
  ) {}

  ngOnInit() {
    this.updatePassForm = this.formBuilder.group(
      {
        oldpassword: ["", Validators.required],
        newpassword: ["", [Validators.required, Validators.minLength(6)]],
        confirmnewpassword: ["", Validators.required],
      },
      {
        validator: MustMatch("newpassword", "confirmnewpassword"),
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.updatePassForm.controls;
  }

  onSubmit() {
    let emailId: any = "";
    let formData: any = null;
    this.isSubmitted = true;
    // stop here if form is invalid
    if (this.updatePassForm.invalid) {
      return;
    }

    emailId = this.tokenServ.getUser().email;
    formData = this.updatePassForm.value;
    if (formData !== null) {
      formData.email = emailId;
      this.authSer.updatePassword(formData).subscribe((pdata) => {
        let dataResp: any = null;
        dataResp = pdata;

        if (dataResp.status === true) {
          this.tokenServ.saveToken(dataResp.accessToken);
          this.alertConfirmation("success", dataResp.message, "top");
          this.updatePassForm.reset();
        } else if (dataResp.status === false) {
          this.alertConfirmation("error", dataResp.message, "top");
        }
      });
    }
  }

  alertConfirmation(p_typ = null, p_msg, p_pos = null) {
    Swal.fire({
      position: p_pos,
      icon: p_typ,
      title: "Password Changed Information",
      text: p_msg,
      showConfirmButton: false,
      showCloseButton: true,
      scrollbarPadding: true,
    });
  }
}
