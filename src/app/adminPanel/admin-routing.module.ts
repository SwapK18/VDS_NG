import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { AdminAuthGuard } from "./admin-auth.guard";
import { AdminAuthGuard } from "./_guards/admin-auth.guard";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AdminRootComponent } from "./admin-root/admin-root.component";
import { ChangePassComponent } from "./change-pass/change-pass.component";
import { CreateBrandComponent } from "./create-brand/create-brand.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ManageBookingComponent } from "./manage-booking/manage-booking.component";
import { ManageBrandComponent } from "./manage-brand/manage-brand.component";
import { ManageContactQueryComponent } from "./manage-contact-query/manage-contact-query.component";
import { ManagePagesComponent } from "./manage-pages/manage-pages.component";
import { ManageSubscribersComponent } from "./manage-subscribers/manage-subscribers.component";
import { ManageTestimonialsComponent } from "./manage-testimonials/manage-testimonials.component";
import { ManageVehicalComponent } from "./manage-vehical/manage-vehical.component";
import { PostVehicalComponent } from "./post-vehical/post-vehical.component";
import { RegisterdUsersComponent } from "./registerd-users/registerd-users.component";
import { UpdateBrandsComponent } from "./update-brands/update-brands.component";
import { UpdateContactsComponent } from "./update-contacts/update-contacts.component";
import { UpdateImgFiveComponent } from "./update-img-five/update-img-five.component";
import { UpdateImgFourComponent } from "./update-img-four/update-img-four.component";
import { UpdateImgOneComponent } from "./update-img-one/update-img-one.component";
import { UpdateImgThreeComponent } from "./update-img-three/update-img-three.component";
import { UpdateImgTwoComponent } from "./update-img-two/update-img-two.component";
import { UpdateVehicalComponent } from "./update-vehical/update-vehical.component";

const routes: Routes = [
  {
    path: "",
    component: AdminRootComponent,
    children: [
      {
        path: "",
        component: AdminLoginComponent,
      },
      {
        path: "admin/dashboard",
        canActivate: [AdminAuthGuard],
        component: DashboardComponent,
      },
      {
        path: "admin/createBrand",
        canActivate: [AdminAuthGuard],
        component: CreateBrandComponent,
      },
      {
        path: "admin/updateBrand",
        canActivate: [AdminAuthGuard],
        component: UpdateBrandsComponent,
      },
      {
        path: "admin/updateVeh",
        canActivate: [AdminAuthGuard],
        component: UpdateVehicalComponent,
      },
      {
        path: "admin/updateImgOne",
        canActivate: [AdminAuthGuard],
        component: UpdateImgOneComponent,
      },
      {
        path: "admin/updateImgTwo",
        canActivate: [AdminAuthGuard],
        component: UpdateImgTwoComponent,
      },
      {
        path: "admin/updateImgThree",
        canActivate: [AdminAuthGuard],
        component: UpdateImgThreeComponent,
      },
      {
        path: "admin/updateImgFour",
        canActivate: [AdminAuthGuard],
        component: UpdateImgFourComponent,
      },
      {
        path: "admin/updateImgFive",
        canActivate: [AdminAuthGuard],
        component: UpdateImgFiveComponent,
      },
      {
        path: "admin/manageBrand",
        canActivate: [AdminAuthGuard],
        component: ManageBrandComponent,
      },
      {
        path: "admin/changePass",
        canActivate: [AdminAuthGuard],
        component: ChangePassComponent,
      },
      {
        path: "admin/postVeh",
        canActivate: [AdminAuthGuard],
        component: PostVehicalComponent,
      },
      {
        path: "admin/manageVeh",
        canActivate: [AdminAuthGuard],
        component: ManageVehicalComponent,
      },
      {
        path: "admin/manageBooking",
        canActivate: [AdminAuthGuard],
        component: ManageBookingComponent,
      },
      {
        path: "admin/manageTestimonial",
        canActivate: [AdminAuthGuard],
        component: ManageTestimonialsComponent,
      },
      {
        path: "admin/manageContactUsQuery",
        canActivate: [AdminAuthGuard],
        component: ManageContactQueryComponent,
      },
      {
        path: "admin/registeredUsers",
        canActivate: [AdminAuthGuard],
        component: RegisterdUsersComponent,
      },
      {
        path: "admin/managePages",
        canActivate: [AdminAuthGuard],
        component: ManagePagesComponent,
      },
      {
        path: "admin/updateContact",
        canActivate: [AdminAuthGuard],
        component: UpdateContactsComponent,
      },
      {
        path: "admin/manageSubscribers",
        canActivate: [AdminAuthGuard],
        component: ManageSubscribersComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
