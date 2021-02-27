import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpParams,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost/VehicalDisplaySystem/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PageServService {
  constructor(private http: HttpClient) {}

  getPage(p_id) {
    return this.http.get(
      'http://localhost/VehicalDisplaySystem/page.php?type=' + p_id
    );
  }

  getAllVehBrands(p_brndID: any = null) {
    return this.http.post('http://localhost/VehicalDisplaySystem/getBrands.php',{
      brndId: p_brndID
    });
  }

  getAllVehicals(p_vehID: any = null) {
    return this.http.post('http://localhost/VehicalDisplaySystem/getVehical.php',{
      vehId: p_vehID
    });
  }

  getAllVehFuealType() {
    return this.http.get(
      'http://localhost/VehicalDisplaySystem/getFulealType.php'
    );
  }

  getAllTestimonial() {
    return this.http.get(
      'http://localhost/VehicalDisplaySystem/getAllTestimonials.php'
    );
  }

  getProfileInfo(p_email) {
    return this.http.get(
      'http://localhost/VehicalDisplaySystem/getProfileInfo.php?eml=' + p_email
    );
  }

  getAllCars(p_limit: number = 0) {
    return this.http.get(
      'http://localhost/VehicalDisplaySystem/getAllCarsRest.php?limit=' +
        p_limit
    );
  }

  getAllVehByFilter(p_checkedBrandNames, p_checkedFuealTypes): Observable<any> {
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('brandz', p_checkedBrandNames);

    return this.http.post(
      'http://localhost/VehicalDisplaySystem/getAllCarsRest.php',
      { brandz: p_checkedBrandNames, typez: p_checkedFuealTypes }
    );
  }

  getAllCarDetails(p_vhid) {
    return this.http.get(
      'http://localhost/VehicalDisplaySystem/vehical-detailsRest.php?vhid=' +
        p_vhid
    );
  }
  
  getAllBookings(p_eml){
    return this.http.get(
      AUTH_API + 'getAllBookings.php?email='+p_eml,
      httpOptions
    );
  }

  processContactQuery(p_regForm) {
    return this.http.post(
      AUTH_API + 'contact-usRest.php',
      {
        fullname: p_regForm.fullname,
        contactno: p_regForm.mobilenumber,
        email: p_regForm.email,
        message: p_regForm.message,
      },
      httpOptions
    );
  }

  deleteElems(p_elmName, p_elemId) {
    return this.http.post(
      AUTH_API + 'admin/deleteElemsById.php',
      {
        type: p_elmName,
        idz: p_elemId,
      },
      httpOptions
    );
  }

  isIfEmailThere(p_regForm) {
    return this.http.post(
      AUTH_API + 'isEmailExists.php',
      {
        emailid: p_regForm.email,
      },
      httpOptions
    );
  }
}
