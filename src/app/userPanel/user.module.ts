import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomepgComponent } from './homepg/homepg.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { ContactusComponent } from './contactus/contactus.component';
import { CarlistingComponent } from './carlisting/carlisting.component';
import { DynpageComponent } from './dynpage/dynpage.component';
import { MyUpdatePasswordComponent } from './my-update-password/my-update-password.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { MyTestimonialComponent } from './my-testimonial/my-testimonial.component';
import { PostTestimonialComponent } from './post-testimonial/post-testimonial.component';
import { VehDetailsComponent } from './veh-details/veh-details.component';
import { UserRootComponent } from './user-root/user-root.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    HomepgComponent,
    HeaderComponent,
    MyUpdatePasswordComponent,
    FooterComponent,
    NavComponent,
    ForgotpasswordComponent,
    RegistrationComponent,
    LoginComponent,
    ContactusComponent,
    CarlistingComponent,
    DynpageComponent,
    ProfileNavComponent,
    MyBookingComponent,
    MyTestimonialComponent,
    PostTestimonialComponent,
    VehDetailsComponent,
    UserRootComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
})
export class UserModule {}
