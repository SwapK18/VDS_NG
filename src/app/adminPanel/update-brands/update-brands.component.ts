import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PageServService } from 'src/app/userPanel/shared/page-serv.service';
import { AdminServiceService } from '../_shared/admin-service.service';

@Component({
  selector: 'app-update-brands',
  templateUrl: './update-brands.component.html',
  styleUrls: ['./update-brands.component.css'],
})
export class UpdateBrandsComponent implements OnInit {
  updateBrandForm: any = {};
  submitted = false;

  brandID: any = null;
  brandName: string = null;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private adminServ: AdminServiceService,
    private pageServ: PageServService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.brandID = params.brndid;
    });

    this.pageServ.getAllVehBrands(this.brandID).subscribe((data) => {
      let dta = null;
      dta = data;
      this.brandName = dta[0].BrandName;
    });

    this.updateBrandForm = this.formBuilder.group({
      brandName: ['', Validators.required],
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.updateBrandForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.updateBrandForm.invalid) {
      return;
    }

    this.adminServ.updateBrand(this.brandID,this.updateBrandForm.value).subscribe((data) => {
      let dataForm: any;
      dataForm = data;

      if (dataForm.status === true) {
        alert('Brand updated successfully.');
      } else if (dataForm.status === false) {
        alert(dataForm.message);
      }
    });
  }
}
