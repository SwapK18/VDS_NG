import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../shared/auth.service';
import { TokenStorageService } from '../shared/token-storage.service';
@Component({
  selector: 'app-post-testimonial',
  templateUrl: './post-testimonial.component.html',
  styleUrls: ['./post-testimonial.component.css'],
})
export class PostTestimonialComponent implements OnInit {
  postTestimonialForm: any = {};
  submitted: boolean = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private tokenServ: TokenStorageService
  ) {}

  ngOnInit() {
    this.postTestimonialForm = this.formBuilder.group({
      testimonial: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.postTestimonialForm.controls;
  }

  onSubmit() {
    let emailId: any = '';
    let formData: any = null;
    this.submitted = true;
    if (this.postTestimonialForm.invalid) {
      return;
    }
    emailId = this.tokenServ.getUser().email;
    formData = this.postTestimonialForm.value;
    formData.email = emailId;
    this.authService.postMyTestimonial(formData).subscribe((p_data) => {
      let testFormData: any = null;
      testFormData = p_data;

      if (testFormData.status === true) {
        this.alertConfirmation("success", testFormData.message, "top");
      } else if (testFormData.status === false) {
        this.alertConfirmation("error", testFormData.message, "top");
      }
    });
  }

  alertConfirmation(p_typ = null, p_msg, p_pos = null) {
    Swal.fire({
      position: p_pos,
      icon: p_typ,
      title: "Password Changed Information",
      text: p_msg,
      showConfirmButton: false,
      allowOutsideClick: true,
      showCloseButton: true,
      scrollbarPadding: true,
    });
  }
}
