import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarlistingComponent } from './carlisting/carlisting.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DynpageComponent } from './dynpage/dynpage.component';
import { HomepgComponent } from './homepg/homepg.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { MyTestimonialComponent } from './my-testimonial/my-testimonial.component';
import { MyUpdatePasswordComponent } from './my-update-password/my-update-password.component';
import { PostTestimonialComponent } from './post-testimonial/post-testimonial.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserRootComponent } from './user-root/user-root.component';
import { VehDetailsComponent } from './veh-details/veh-details.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UserRootComponent,
    children: [
      {
        path: '',
        component: HomepgComponent
      },
      {
        path: "user/updatepassword",
        canActivate: [AuthGuard],
        component: MyUpdatePasswordComponent,
      },
      {
        path: "user/posttestimonial",
        canActivate: [AuthGuard],
        component: PostTestimonialComponent
      },
      {
        path: "user/mybooking",
        canActivate: [AuthGuard],
        component: MyBookingComponent,
      },
      {
        path: "user/mytestimonials",
        canActivate: [AuthGuard],
        component: MyTestimonialComponent,
      },
      {
        path: 'user/contactus',
        component: ContactusComponent
      },
      {
        path: 'user/carlisting',
        component: CarlistingComponent,
      },
      {
        path: "user/vehDetails/:vhid",
        canActivate: [AuthGuard],
        component: VehDetailsComponent,
      },
      { path: 'user/page/:id', component: DynpageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
