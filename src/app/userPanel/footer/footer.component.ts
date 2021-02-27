import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { PageServService } from '../shared/page-serv.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  subscriberEmailForm: any = {};
  isSuccessful: boolean = false;
  isSignUpFailed: boolean = false;
  errorMessage: string = "";
  successMessage: string = "";
  isEmailExists: boolean = false;
  submitted = false;

  constructor(private pageService: PageServService,
    private authService: AuthService,
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.subscriberEmailForm = this.formBuilder.group(
      {
        subscriberemail: ["", [Validators.required, Validators.email]]
      }
    );
  }

  get f() {
    return this.subscriberEmailForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.subscriberEmailForm.invalid) {
      return;
    }
   
      this.authService.subscriberEmail(this.subscriberEmailForm.value).subscribe((data) => {
        let dataForm: any;
        dataForm = data;

        if (dataForm.emailStatus === true) {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          alert(dataForm.message);
        } else if (dataForm.emailStatus === false) {
          this.isSuccessful = false;
          this.isSignUpFailed = true;
          alert(dataForm.message);
        }
      });
  }
}
