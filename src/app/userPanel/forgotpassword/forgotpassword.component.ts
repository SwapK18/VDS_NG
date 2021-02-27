import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { AuthService } from "../shared/auth.service";
import { PageServService } from "../shared/page-serv.service";
import { MustMatch } from "../_helpers/must-match.validator";

@Component({
  selector: "app-forgotpassword",
  templateUrl: "./forgotpassword.component.html",
  styleUrls: ["./forgotpassword.component.css"],
})
export class ForgotpasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  isSuccessful: boolean = false;
  isFailed: boolean = false;
  message: string = "";
  submitted = false;

  constructor(
    private pageService: PageServService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  // convenience getter for easy access to form fields
  get f() {
    return this.forgotPasswordForm.controls;
  }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group(
      {
        mobilenumber: [
          "",
          [
            Validators.required,
            Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
          ],
        ],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
      },
      {
        validator: MustMatch("password", "confirmPassword"),
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    this.authService.forgotPassword(this.forgotPasswordForm.value).subscribe((data) => {
      let dataResp:any = null;
      
      dataResp = data;
      if(dataResp.status === true){
        this.isSuccessful = true;
        this.isFailed = false;
        this.message = dataResp.message;
        this.alertConfirmation('success',this.message, 'top-end');
        this.forgotPasswordForm.reset();
      }else{
        this.isSuccessful = false;
        this.isFailed = true;
        this.message = dataResp.message;
        this.alertConfirmation('error',this.message, 'top-end');
        this.forgotPasswordForm.reset();
      }
    });
  }
  
  alertConfirmation(p_typ = null, p_msg, p_pos = null) {
    Swal.fire({
      position: p_pos,
      icon: p_typ,
      text: p_msg,
      showConfirmButton: false,
      // timer: 3000,
      allowOutsideClick: true,
      showCloseButton: true,
      scrollbarPadding: true,
    });
  }

}
