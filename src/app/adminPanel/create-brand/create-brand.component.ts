import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PageServService } from 'src/app/userPanel/shared/page-serv.service';
import Swal from 'sweetalert2';
import { AdminServiceService } from '../_shared/admin-service.service';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css'],
})
export class CreateBrandComponent implements OnInit {
  createBrandForm: any = {};
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private adminServ: AdminServiceService,
  ) {}

  // convenience getter for easy access to form fields
  get f() {
    return this.createBrandForm.controls;
  }

  ngOnInit(): void {
    this.createBrandForm = this.formBuilder.group({
      brandName: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.createBrandForm.invalid) {
      return;
    }

    this.adminServ.createBrand(this.createBrandForm.value).subscribe((data) => {
      let dataForm: any;
      dataForm = data;

      if (dataForm.status === true) {
        this.alertConfirmation('success', dataForm.message, 'center-end');
      } else if (dataForm.status === false) {
        this.alertConfirmation('error', dataForm.message, 'center-end');
      }
    });

    this.createBrandForm.reset();
  }

  alertConfirmation(p_typ, p_msg, p_pos=null) {
    Swal.fire({
      position: p_pos,
      icon: p_typ,
      text: p_msg,
      showConfirmButton: false,
      timer: 5000
    })
  }
}
