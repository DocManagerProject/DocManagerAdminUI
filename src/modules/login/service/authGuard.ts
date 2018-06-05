import {CanActivate, Router} from "@angular/router";
import {ApiLoginService} from "./apiLoginService";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private apiLoginService: ApiLoginService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (!this.apiLoginService.isLoggedIn()) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
