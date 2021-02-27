import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import Swal from "sweetalert2";

const AUTH_API = "http://localhost/VehicalDisplaySystem/";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class AdminAuthService {
  constructor(private httpc: HttpClient) {}

  login(credentials): Observable<any> {
    return this.httpc.post(
      AUTH_API + "loginREST.php",
      { email: credentials.email, password: credentials.password },
      httpOptions
    );
  }

  getAllUsersRegistered() {
    return this.httpc.get(AUTH_API + "admin/getAllUsers.php");
  }

  getAllSubscribers() {
    return this.httpc.get(AUTH_API + "admin/getAllSubscribers.php");
  }

  getAllPages(p_pgTypId: any = null) {
    return this.httpc.post(AUTH_API + "admin/getAllPages.php", {
      pageId: p_pgTypId,
    });
  }

  deleteSubscriber(p_subsRecId) {
    return this.httpc.post(AUTH_API + "admin/deleteElemsById.php", {
      type: "subscriber",
      idz: p_subsRecId,
    });
  }

  getAllBookings() {
    return this.httpc.get(AUTH_API + "admin/getAllBookings.php");
  }

  actionBooking(p_action, p_bookingRecId) {
    return this.httpc.post(AUTH_API + "admin/actionBookings.php", {
      bookRecId: p_bookingRecId,
      action: p_action,
    });
  }

  getAllTestimonials() {
    return this.httpc.get(AUTH_API + "admin/getAllTestimonials.php");
  }

  getAllContactQry() {
    return this.httpc.get(AUTH_API + "admin/getAllContactQry.php");
  }

  editTestimonialStatus(p_action, p_testiRecId) {
    return this.httpc
      .post(AUTH_API + "admin/actionTestiStatus.php", {
        testiRecId: p_testiRecId,
        action: p_action,
      })
      .pipe(retry(1), catchError(this.handleError));
  }

  editContactQryStatus(p_action, p_contactQryRecId) {
    return this.httpc.post(AUTH_API + "admin/actionContactQryStatus.php", {
      qryRecId: p_contactQryRecId,
      action: p_action,
    });
  }

  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
