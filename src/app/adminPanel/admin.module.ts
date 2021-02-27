import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminRootComponent } from "./admin-root/admin-root.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { CreateBrandComponent } from "./create-brand/create-brand.component";
import { ManageBrandComponent } from "./manage-brand/manage-brand.component";
import { ChangePassComponent } from "./change-pass/change-pass.component";
import { PostVehicalComponent } from "./post-vehical/post-vehical.component";
import { ManageVehicalComponent } from "./manage-vehical/manage-vehical.component";
import { ManageBookingComponent } from "./manage-booking/manage-booking.component";
import { ManageTestimonialsComponent } from "./manage-testimonials/manage-testimonials.component";
import { ManageContactQueryComponent } from "./manage-contact-query/manage-contact-query.component";
import { ManagePagesComponent } from "./manage-pages/manage-pages.component";
import { RegisterdUsersComponent } from "./registerd-users/registerd-users.component";
import { UpdateContactsComponent } from "./update-contacts/update-contacts.component";
import { ManageSubscribersComponent } from "./manage-subscribers/manage-subscribers.component";
import { UpdateBrandsComponent } from "./update-brands/update-brands.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { UpdateVehicalComponent } from "./update-vehical/update-vehical.component";
import { UpdateImgOneComponent } from "./update-img-one/update-img-one.component";
import { UpdateImgTwoComponent } from "./update-img-two/update-img-two.component";
import { UpdateImgThreeComponent } from "./update-img-three/update-img-three.component";
import { UpdateImgFourComponent } from "./update-img-four/update-img-four.component";
import { UpdateImgFiveComponent } from "./update-img-five/update-img-five.component";
import { AdminInterceptor } from "./_helpers/admin.interceptor";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AdminInterceptor,
      multi: true,
    },
  ],
  declarations: [
    DashboardComponent,
    AdminRootComponent,
    AdminLoginComponent,
    TopNavComponent,
    SideNavComponent,
    CreateBrandComponent,
    ManageBrandComponent,
    ChangePassComponent,
    PostVehicalComponent,
    ManageVehicalComponent,
    ManageBookingComponent,
    ManageTestimonialsComponent,
    ManageContactQueryComponent,
    ManagePagesComponent,
    RegisterdUsersComponent,
    UpdateContactsComponent,
    ManageSubscribersComponent,
    UpdateBrandsComponent,
    UpdateVehicalComponent,
    UpdateImgOneComponent,
    UpdateImgTwoComponent,
    UpdateImgThreeComponent,
    UpdateImgFourComponent,
    UpdateImgFiveComponent,
  ],
})
export class AdminModule {}
