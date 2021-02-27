import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AdminTokenStorageService } from "./admin-token-storage.service";

const AUTH_API = "http://localhost/VehicalDisplaySystem/";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class AdminServiceService {
  brandId: any = null;
  vehicalId: any = null;

  constructor(
    private httpClient: HttpClient,
    public adminTokenServ: AdminTokenStorageService
  ) {}

  // Verify user credentials on server to get token
  login(credentials): Observable<any> {
    return this.httpClient.post(
      AUTH_API + "admin/loginREST.php",
      { userName: credentials.username, password: credentials.password },
      httpOptions
    );
  }

  getAllData(p_typ) {
    return this.httpClient.get(
      "http://localhost/VehicalDisplaySystem/admin/dashboardREST.php?tp=" +
        p_typ
    );
  }

  updateBrand(p_brndId, p_updateBrandForm) {
    return this.httpClient.post(
      "http://localhost/VehicalDisplaySystem/admin/updateBrandREST.php",
      {
        brndId: p_brndId,
        brndName: p_updateBrandForm.brandName,
      }
    );
  }

  updateVehical(p_updateVehicalForm) {
    console.log(p_updateVehicalForm);
    return this.httpClient.post(
      "http://localhost/VehicalDisplaySystem/admin/updateVehicalREST.php",
      p_updateVehicalForm
    );
  }

  createBrand(p_createBrandForm) {
    return this.httpClient.post(
      "http://localhost/VehicalDisplaySystem/admin/createBrandREST.php",
      {
        brnd: p_createBrandForm.brandName,
      }
    );
  }

  editBrands(p_brndId) {
    this.brandId = p_brndId;
  }

  postVeh(p_formData, p_formVals) {
    let employee = {
      ...p_formData,
      ...p_formVals,
    };

    return this.httpClient.post(
      "http://localhost/VehicalDisplaySystem/admin/upload.php",
      p_formData
    );
  }

  deleteElems(p_elmName, p_elemId) {
    return this.httpClient.post(
      "http://localhost/VehicalDisplaySystem/admin/deleteElemsById.php",
      {
        type: p_elmName,
        idz: p_elemId,
      }
    );
  }

  changeImg1(p_recordId, p_uplVehFrm) {
    let formData = new FormData();
    let img = null;
    img = formData.append("imageOne", p_uplVehFrm.get("imgOne").value);

    return this.httpClient.post(
      "http://localhost/VehicalDisplaySystem/admin/chnageImgOneREST.php",
      {
        vehRecId: p_recordId,
        image1: img,
      }
    );
  }

  chagePasswd(p_cred) {
    let adminEmail: any = null;

    adminEmail = this.adminTokenServ.getUser().adminEmail;

    return this.httpClient.post(
      "http://localhost/VehicalDisplaySystem/admin/changePasswordREST.php",
      {
        admEmail: adminEmail,
        oldpassword: p_cred.currentPassword,
        newpassword: p_cred.newPassword,
      }
    );
  }
}
