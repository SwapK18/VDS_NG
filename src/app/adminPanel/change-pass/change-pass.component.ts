import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { PageServService } from "src/app/userPanel/shared/page-serv.service";
import { MustMatch } from "src/app/userPanel/_helpers/must-match.validator";
import Swal from "sweetalert2";
import { AdminServiceService } from "../_shared/admin-service.service";
import { AdminTokenStorageService } from "../_shared/admin-token-storage.service";

@Component({
  selector: "app-change-pass",
  templateUrl: "./change-pass.component.html",
  styleUrls: ["./change-pass.component.css"],
})
export class ChangePassComponent implements OnInit {
  changePasswordForm: any = {};
  isSuccessful: boolean = false;
  isSignUpFailed: boolean = false;
  errorMessage: string = "";
  successMessage: string = "";
  isEmailExists: boolean = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private adminServ: AdminServiceService,
    private adTokenServ: AdminTokenStorageService
  ) {}

  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group(
      {
        confirmPassword: ["", Validators.required],
        currentPassword: ["", [Validators.required, Validators.minLength(2)]],
        newPassword: ["", [Validators.required, Validators.minLength(2)]],
      },
      {
        validator: MustMatch("newPassword", "confirmPassword"),
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.changePasswordForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.changePasswordForm.invalid) {
      return;
    }

    this.adminServ.chagePasswd(this.changePasswordForm.value).subscribe((p_resp)=>{
      let dta = null;
      dta = p_resp;

      if(dta.status === true){
        this.adTokenServ.saveToken(dta.accessToken);
        this.alertConfirmation("success", dta.message, "center-end");
      }else{
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
}
