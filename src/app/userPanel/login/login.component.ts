import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { AuthService } from "../shared/auth.service";
import { TokenStorageService } from "../shared/token-storage.service";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showCloseButton: true,
  showConfirmButton: false,
  timer: 3000,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }
  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value).subscribe((data) => {
      let dataResp: any = "";
      dataResp = data;
      if (dataResp.status === true) {
        this.tokenStorage.saveToken(dataResp.accessToken);
        this.tokenStorage.saveUser(dataResp.user);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.alertConfirmation("success", "Login successful", "top-end");
        setTimeout(this.reloadPage, 3000);
        this.loginForm.reset();
      } else {
        this.isLoginFailed = true;
        this.alertConfirmation(
          "error",
          "Problem in login, please try again.",
          "top-end"
        );
        this.errorMessage = dataResp.message;
        this.loginForm.reset();
      }
    });
  }

  reloadPage() {
    window.location.reload();
  }

  alertConfirmation(p_typ, p_msg, p_pos = null) {
    Swal.fire({
      position: p_pos,
      icon: p_typ,
      text: p_msg,
      // toast: true,
      showConfirmButton: false,
      showCloseButton: true
    });
  }
}
