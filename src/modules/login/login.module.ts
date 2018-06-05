import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./login.component";
import {LoginPage} from "./content/loginpage/loginPage";
import {LoginBox} from "./content/loginbox/loginBox";
import {FormsModule} from "@angular/forms";
import {ApiLoginService} from "./service/apiLoginService";
import {HttpClientModule} from "@angular/common/http";
import {LoggedInGuard} from "./service/loggedInGuard";


const appRoutes: Routes = [
  { path: 'login', component: LoginPage, canActivate: [LoggedInGuard]}
];

@NgModule({
  declarations: [
    LoginComponent,
    LoginPage,
    LoginBox
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiLoginService,
    LoggedInGuard
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule {

}
