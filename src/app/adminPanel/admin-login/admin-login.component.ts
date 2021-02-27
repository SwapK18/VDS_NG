import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AdminServiceService } from "../_shared/admin-service.service";
import { AdminTokenStorageService } from "../_shared/admin-token-storage.service";
import { ApplyStyleScriptsService } from "../_shared/apply-style-scripts.service";
import Swal from "sweetalert2/dist/sweetalert2.js";

@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.css"],
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";

  constructor(
    private router: Router,
    private adminAuthServ: AdminServiceService,
    private adminTokenStorageServ: AdminTokenStorageService,
    private formBuilder: FormBuilder,
    private applStylScrptService: ApplyStyleScriptsService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });

    if (this.adminTokenStorageServ.getToken()) {
      this.isLoggedIn = true;
    }

    this.applStylScrptService.loadStyle([
      // "fontawesome.css",
      "bootstrapmin.css",
      "datatablesbootstrapmin.css",
      "bootstrapsocial.css",
      "bootstrapselect.css",
      "fileinputmin.css",
      "awesomebootstrapcheckbox.css",
      "adminstyle.css"
    ]);

    this.applStylScrptService.loadScript([
      "../../assets/js/jquery.min.js",
      "../../assets/js/bootstrap-select.min.js",
      "../../assets/js/bootstrap.min.js",
      "../../assets/js/jquery.dataTables.min.js",
      "../../assets/js/dataTables.bootstrap.min.js",
      "../../assets/js/Chart.min.js",
      "../../assets/js/fileinput.js",
      "../../assets/js/chartData.js",
      "../../assets/js/main.js"
      
    ]);

    // is he loged in then redirect to dashboard
    if (this.adminTokenStorageServ.isLoggedIn() === true) {
      this.router.navigate(["/admin/dashboard"]);
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

    this.adminAuthServ.login(this.loginForm.value).subscribe((data) => {
      let dataResp: any = "";
      dataResp = data;
      if (dataResp.status === true) {
        this.adminTokenStorageServ.saveToken(dataResp.accessToken);
        this.adminTokenStorageServ.saveUser(dataResp.user);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.alertConfirmation("success", dataResp.message, "center-end");
        this.router.navigate(["/admin/dashboard"]);
      } else {
        this.isLoginFailed = true;
        this.alertConfirmation(
          "error",
          dataResp.message + "Pease try another credentials.",
          "center-end"
        );
        this.errorMessage = dataResp.message;
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
