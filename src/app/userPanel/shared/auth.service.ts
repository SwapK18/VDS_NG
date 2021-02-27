import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";

const AUTH_API = "http://localhost/VehicalDisplaySystem/";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}
  
  // Verify user credentials on server to get token
  login(credentials): Observable<any> {
    return this.http.post(
      AUTH_API + "loginREST.php",
      { email: credentials.email, password: credentials.password },
      httpOptions
    );
  }

  register(p_regForm) {
    return this.http.post(
      AUTH_API + "registerUser.php",
      {
        fullname: p_regForm.fullname,
        mobileno: p_regForm.mobilenumber,
        emailid: p_regForm.email,
        password: p_regForm.password,
      },
      httpOptions
    );
  }

  subscriberEmail(p_subscriberForm) {
    return this.http.post(
      AUTH_API + "subscribeUser.php",
      {
        emailid: p_subscriberForm.subscriberemail
      },
      httpOptions
    );
  }

  forgotPassword(p_forgotPassForm) {
    return this.http.post(
      AUTH_API + "forgotpasswordREST.php",
      {
        mobileno: p_forgotPassForm.mobilenumber,
        emailid: p_forgotPassForm.email,
        password: p_forgotPassForm.password,
      },
      httpOptions
    );
  }

  updatePassword(p_updatePassForm) {
    return this.http.post(
      AUTH_API + "updatePassword.php",
      {
        oldpassword: p_updatePassForm.oldpassword,
        newpassword: p_updatePassForm.newpassword,
        email: p_updatePassForm.email,
        confirmnewpassword: p_updatePassForm.confirmnewpassword,
      },
      httpOptions
    );
  }

  postMyTestimonial(p_postTestimonialForm) {
    return this.http.post(
      AUTH_API + "postTestimonialREST.php",
      {
        testimonial: p_postTestimonialForm.testimonial,
        email: p_postTestimonialForm.email,
      },
      httpOptions
    );
  }
}
