import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { PageServService } from "src/app/userPanel/shared/page-serv.service";
import { AdminServiceService } from "../_shared/admin-service.service";

@Component({
  selector: "app-update-vehical",
  templateUrl: "./update-vehical.component.html",
  styleUrls: ["./update-vehical.component.css"],
})
export class UpdateVehicalComponent implements OnInit {
  url = null;
  updateVehicalForm: any = {};
  allBrnds: any[] = [];
  allVehFuealTyp: any[] = [];
  submitted = false;
  vehicalID: any = null;
  vehicleTitle: any = null;
  brandId: any = null;
  vehiclesOverview: any = null;
  pricePerDay: any = null;
  fuelTypeId: any = null;
  modelYear: any = null;
  seatingCapacity: any = null;
  vimage1: any = null;
  vimage2: any = null;
  vimage3: any = null;
  vimage4: any = null;
  vimage5: any = null;
  airConditioner: any = null;
  powerDoorLocks: any = null;
  antiLockBrakingSystem: any = null;
  brakeAssist: any = null;
  powerSteering: any = null;
  driverAirbag: any = null;
  passengerAirbag: any = null;
  powerWindows: any = null;
  cdPlayer: any = null;
  centralLocking: any = null;
  crashSensor: any = null;
  leatherSeats: any = null;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private adminServ: AdminServiceService,
    private pageServ: PageServService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.url = "http://localhost/VehicalDisplaySystem/assets/images/";
    this.getAllBrands();
    this.getVehFuealTyp();

    this.route.params.subscribe((params) => {
      this.vehicalID = params.vehid;
    });

    this.pageServ.getAllVehicals(this.vehicalID).subscribe((data) => {
      let dta = null;
      dta = data;
      this.vehicleTitle = dta[0].VehiclesTitle;
      this.vehiclesOverview = dta[0].VehiclesOverview;
      this.pricePerDay = dta[0].PricePerDay;
      this.modelYear = dta[0].ModelYear;
      this.seatingCapacity = dta[0].SeatingCapacity;
      this.vimage1 = dta[0].Vimage1;
      this.vimage2 = dta[0].Vimage2;
      this.vimage3 = dta[0].Vimage3;
      this.vimage4 = dta[0].Vimage4;
      this.vimage5 = dta[0].Vimage5;

      this.airConditioner = (dta[0].AirConditioner == 1) ? true : false;
      this.powerDoorLocks = (dta[0].PowerDoorLocks == 1) ? true : false;
      this.antiLockBrakingSystem = (dta[0].AntiLockBrakingSystem == 1)  ? true : false;
      this.brakeAssist = (dta[0].BrakeAssist == 1)  ? true : false;
      this.powerSteering = (dta[0].PowerSteering == 1)  ? true : false;
      this.driverAirbag = (dta[0].DriverAirbag == 1)  ? true : false;
      this.passengerAirbag = (dta[0].PassengerAirbag == 1)  ? true : false;
      this.powerWindows = (dta[0].PowerWindows == 1)  ? true : false;
      this.cdPlayer = (dta[0].CDPlayer == 1)  ? true : false;
      this.centralLocking = (dta[0].CentralLocking == 1)  ? true : false;
      this.crashSensor = (dta[0].CrashSensor == 1)  ? true : false;
      this.leatherSeats = (dta[0].LeatherSeats == 1)  ? true : false;

      console.log(this.airConditioner);
    });

    this.updateVehicalForm = this.formBuilder.group({
      vehicleId: ["",Validators.required],
      vehicleTitle: ["", Validators.required],
      brandName: ["", Validators.required],
      pricePerDay: ["", Validators.required],
      modelYear: ["", Validators.required],
      seatingCapacity: ["", Validators.required],
      fuealType: ["", Validators.required],
      vehicleOverview: ["", Validators.required],
      airConditioner: ["", Validators.required],
      powerDoorLocks: ["", Validators.required],
      antiLockBrakingSystem: ["", Validators.required],
      brakeAssist: ["", Validators.required],
      powerSteering: ["", Validators.required],
      driverAirbag: ["", Validators.required],
      passengerAirbag: ["", Validators.required],
      powerWindows: ["", Validators.required],
      cdPlayer: ["", Validators.required],
      centralLocking: ["", Validators.required],
      crashSensor: ["", Validators.required],
      leatherSeats: ["", Validators.required],
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.updateVehicalForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.updateVehicalForm.invalid) {
      return;
    }

    this.adminServ.updateVehical(this.updateVehicalForm.value).subscribe((data) => {
        let dataForm: any;
        dataForm = data;

        if (dataForm.status === true) {
          alert("Vehical updated successfully.");
          this.updateVehicalForm.reset();
        } else if (dataForm.status === false) {
          alert(dataForm.message);
          this.updateVehicalForm.reset();
        }
      });
  }

  getAllBrands() {
    this.pageServ.getAllVehBrands().subscribe((p_dta) => {
      let dta: any = null;
      dta = p_dta;
      this.allBrnds = dta;
    });
  }

  getVehFuealTyp() {
    this.pageServ.getAllVehFuealType().subscribe((p_dta) => {
      let dta: any = null;
      dta = p_dta;
      this.allVehFuealTyp = dta;
    });
  }

  changeImgOne() {
    this.router.navigate(["/admin/updateImgOne", { vehRecID: this.vehicalID }]);
  }

  changeImgTwo() {
    this.router.navigate(["/admin/updateImgTwo", { vehRecID: this.vehicalID }]);
  }

  changeImgThree(){
    this.router.navigate(["/admin/updateImgThree", { vehRecID: this.vehicalID }]);
  }

  changeImgFour() {
    this.router.navigate(["/admin/updateImgFour", { vehRecID: this.vehicalID }]);
  }

  changeImgFive() {
    this.router.navigate(["/admin/updateImgFive", { vehRecID: this.vehicalID }]);
  }

}
