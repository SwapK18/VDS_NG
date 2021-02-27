import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { PageServService } from "src/app/userPanel/shared/page-serv.service";
import Swal from 'sweetalert2';

@Component({
  selector: "app-post-vehical",
  templateUrl: "./post-vehical.component.html",
  styleUrls: ["./post-vehical.component.css"],
})
export class PostVehicalComponent implements OnInit {
  allBrnds: any[] = [];
  allVehFuealTyp: any[] = [];
  postVehForm:any = null;
  isSubmitted:boolean = false;
 
  constructor(
    private pageServ: PageServService,
    public fb: FormBuilder,
    private http: HttpClient
  ) {}

  get f() {
    return this.postVehForm.controls;
  }

  onFileChange(p_num: number, event: any) {
    if (p_num === 1) {
      if (event.target.files.length > 0) {
        const imageOne = event.target.files[0];
        this.postVehForm.patchValue({
          fileSourceOne: imageOne,
        });
      }
    }else if (p_num === 2) {
      if (event.target.files.length > 0) {
        const imageTwo = event.target.files[0];
        this.postVehForm.patchValue({
          fileSourceTwo: imageTwo,
        });
      }
    }else if (p_num === 3) {
      if (event.target.files.length > 0) {
        const imageThree = event.target.files[0];
        this.postVehForm.patchValue({
          fileSourceThree: imageThree,
        });
      }
    }else if (p_num === 4) {
      if (event.target.files.length > 0) {
        const imageFour = event.target.files[0];
        this.postVehForm.patchValue({
          fileSourceFour: imageFour,
        });
      }
    }else if (p_num === 5) {
      if (event.target.files.length > 0) {
        const imageFive = event.target.files[0];
        this.postVehForm.patchValue({
          fileSourceFive: imageFive,
        });
      }
    }
  }

  submit() {
    this.isSubmitted = true;
    if (this.postVehForm.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append("imageOne", this.postVehForm.get("fileSourceOne").value);
    formData.append("imageTwo", this.postVehForm.get("fileSourceTwo").value);
    formData.append("imageThree", this.postVehForm.get("fileSourceThree").value);
    formData.append("imageFour", this.postVehForm.get("fileSourceFour").value);
    formData.append("imageFive", this.postVehForm.get("fileSourceFive").value);
    
    formData.append("vTitle", this.postVehForm.get("vehicleTitle").value);
    formData.append("brandName", this.postVehForm.get("brandName").value);
    formData.append("pricePerDay", this.postVehForm.get("pricePerDay").value);
    formData.append("modelYear", this.postVehForm.get("modelYear").value);
    formData.append("seatingCapacity", this.postVehForm.get("seatingCapacity").value);
    formData.append("fuealType", this.postVehForm.get("fuealType").value);
    formData.append("vOverview", this.postVehForm.get("vehicleOverview").value);
    formData.append("airConditioner", this.postVehForm.get("airConditioner").value);
    formData.append("cdPlayer", this.postVehForm.get("cdPlayer").value);
    formData.append("powerDoorLocks", this.postVehForm.get("powerDoorLocks").value);
    formData.append("antiLockBrakingSystem", this.postVehForm.get("antiLockBrakingSystem").value);
    formData.append("brakeAssist", this.postVehForm.get("brakeAssist").value);
    formData.append("powerSteering", this.postVehForm.get("powerSteering").value);
    formData.append("driverAirbag", this.postVehForm.get("driverAirbag").value);
    formData.append("passengerAirbag", this.postVehForm.get("passengerAirbag").value);
    formData.append("powerWindows", this.postVehForm.get("powerWindows").value);
    formData.append("centralLocking", this.postVehForm.get("centralLocking").value);
    formData.append("crashSensor", this.postVehForm.get("crashSensor").value);
    formData.append("leatherSeats", this.postVehForm.get("leatherSeats").value);

    this.http.post("http://localhost/VehicalDisplaySystem/admin/shift.php", formData).subscribe((res) => {
        let dta:any = null;
        dta = res;
        if(dta.status === true){
          this.alertConfirmation("success", dta.message, "center-end");
        }else{
          this.alertConfirmation("error", dta.message, "center-end");
        }
      });
  }

  ngOnInit(): void {
    this.postVehForm = new FormGroup({
      vehicleTitle: new FormControl("", [Validators.required]),
      brandName: new FormControl("", [Validators.required]),
      pricePerDay: new FormControl("", [Validators.required]),
      modelYear: new FormControl("", [Validators.required]),
      seatingCapacity: new FormControl("", [Validators.required]),
      fuealType: new FormControl("", [Validators.required]),
      vehicleOverview: new FormControl("", [Validators.required]),
      imageOne: new FormControl("", [Validators.required]),
      imageTwo: new FormControl("", [Validators.required]),
      imageThree: new FormControl("", [Validators.required]),
      imageFour: new FormControl("", [Validators.required]),
      imageFive: new FormControl(""),
      airConditioner: new FormControl(""),
      cdPlayer: new FormControl(""),
      powerDoorLocks: new FormControl(""),
      antiLockBrakingSystem: new FormControl(""),
      brakeAssist: new FormControl(""),
      powerSteering: new FormControl(""),
      driverAirbag: new FormControl(""),
      passengerAirbag: new FormControl(""),
      powerWindows: new FormControl(""),
      centralLocking: new FormControl(""),
      crashSensor: new FormControl(""),
      leatherSeats: new FormControl(""),
      fileSourceOne: new FormControl('', [Validators.required]),
      fileSourceTwo: new FormControl('', [Validators.required]),
      fileSourceThree: new FormControl('', [Validators.required]),
      fileSourceFour: new FormControl('', [Validators.required]),
      fileSourceFive: new FormControl('', [Validators.required]),
  
    });
    this.getAllBrands();
    this.getVehFuealTyp();
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
