import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from 'sweetalert2';
import { AuthService } from '../shared/auth.service';
import { PageServService } from "../shared/page-serv.service";
import { MustMatch } from "../_helpers/must-match.validator";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements OnInit {
  registerForm: any = {};
  isSuccessful: boolean = false;
  isSignUpFailed: boolean = false;
  errorMessage: string = "";
  successMessage: string = "";
  isEmailExists: boolean = false;
  submitted = false;

  constructor(
    private pageService: PageServService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        fullname: ["", Validators.required],
        mobilenumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validator: MustMatch("password", "confirmPassword"),
      }
    );
  }

  ifIsEmailExsits() {
    this.pageService.isIfEmailThere(this.registerForm.value).subscribe((data) => {
      let dataForm: any;
      dataForm = data;
      if (dataForm.status === true) {
        this.isEmailExists = true;
      } else {
        this.isEmailExists = false;
      }
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.ifIsEmailExsits();
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (this.isEmailExists === true) {
      this.errorMessage = "Email is already there.Please try something other.";
      this.isSuccessful = false;
      this.isSignUpFailed = true;
      // alert('Email is already there, please try other.');
      this.alertConfirmation('info','Email is already there, please try other.', 'center-end');
    } else {
      this.authService.register(this.registerForm.value).subscribe((data) => {
        let dataForm: any;
        dataForm = data;

        if (dataForm.status === true) {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.alertConfirmation('success','User registration successful.', 'top-end');
          this.successMessage = dataForm.message;
        } else if (dataForm.status === false) {
          this.errorMessage = dataForm.message;
          this.isSuccessful = false;
          this.isSignUpFailed = true;
          this.alertConfirmation('error', dataForm.message, 'top-end');
        }
      });

      this.registerForm.reset();
    }
  }

  alertConfirmation(p_typ, p_msg, p_pos = null) {
    Swal.fire({
      position: p_pos,
      icon: p_typ,
      text: p_msg,
      toast:true,
      showConfirmButton: false
    });
  }
}
