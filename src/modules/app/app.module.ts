import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {StorageManager} from "./service/storageManager.service";
import {LoginModule} from "../login/login.module";

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    LoginModule
  ],
  providers: [StorageManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
