import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PageServService } from '../shared/page-serv.service';

@Component({
  selector: 'app-veh-details',
  templateUrl: './veh-details.component.html',
  styleUrls: ['./veh-details.component.css'],
})
export class VehDetailsComponent implements OnInit {
  bookVehical: FormGroup;
  isSubmitted = false;
  vehId: any;
  vehDetails: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private _activeRoute: ActivatedRoute,
    private serv: PageServService
  ) {}

  ngOnInit() {
    this.bookVehical = this.formBuilder.group(
      {
        fromdate: ["", Validators.required],
        todate: ["", Validators.required],
        message: ["", Validators.required],
      }
    );

    this._activeRoute.params.subscribe((routeParams) => {
      this.vehId = routeParams.vhid;
      this.getAllCarDetails(this.vehId);
    });
  }

  get f() {
    return this.bookVehical.controls;
  }


  getAllCarDetails(p_vid) {
    this.vehDetails = [];
    let data;
    this.serv.getAllCarDetails(p_vid).subscribe((params) => {
      data = params;
      if (data.status === true) {
        this.vehDetails = data.data;
      } else if (data.status === false) {
        console.log(data.message);
      }
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    // stop here if form is invalid
    if (this.bookVehical.invalid) {
      return;
    }
  }
}
