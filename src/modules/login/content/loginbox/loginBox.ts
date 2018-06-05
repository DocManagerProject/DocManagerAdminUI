import {Component} from "@angular/core";
import {LoginCredentials} from "../../model/loginCredentials";
import {ApiLoginService} from "../../service/apiLoginService";

@Component({
  selector: 'login-box',
  templateUrl: './loginBox.html',
  styleUrls: ['./loginBox.css']
})
export class LoginBox {
  loginCredentials: LoginCredentials = new LoginCredentials("", "");

  isValid: boolean = true;
  errorMessage: string = "";

  constructor(private loginService: ApiLoginService) { }

  displayError(errorMessage: string) : void {
    this.errorMessage = errorMessage;
  }

  validateCredentials() : void {
    if (this.loginCredentials.email.length < 1) {
      this.isValid = false;
      this.displayError("E-mail cannot be empty");
      return;
    }

    if (this.loginCredentials.password.length < 1) {
      this.isValid = false;
      this.displayError("Password cannot be empty");
      return;
    }

    this.isValid = true;
  }

  onSubmit() : void {
    this.validateCredentials();

    if (this.isValid) {
      this.loginService.login(this.loginCredentials);
    }
  }
}
