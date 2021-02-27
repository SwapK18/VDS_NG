import { NgModule } from '@angular/core';

import { MyRoutingModule } from './myrouting.module';
import { AppComponent } from './app.component';
import { UserModule } from './userPanel/user.module';
import { AdminModule } from './adminPanel/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyRoutingModule,
    UserModule,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
