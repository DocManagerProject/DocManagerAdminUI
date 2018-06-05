import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpResponseBase} from "@angular/common/http";
import {LoginCredentials} from "../model/loginCredentials";
import {Router} from "@angular/router";
import {StorageManager} from "../../app/service/storageManager.service";

const API_URL: string = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private storageManager: StorageManager
  ) { }

  public isLoggedIn(): boolean {
    return this.storageManager.getApiToken() !== null;
  }

  public login(credentials: LoginCredentials): void {
    if (this.isLoggedIn()) {
      return;
    }
    this.http.post(API_URL + "/login", credentials, {observe: 'response'})
      .subscribe(response => this.onSuccess(response), this.onError);
  }

  public logout(): void {
    if (this.isLoggedIn()) {
      this.storageManager.clearApiToken();
      this.router.navigate(["login"]);
    }
  }

  private onSuccess(response: HttpResponseBase): void {
    this.storageManager.saveApiToken(response.headers.get("adminApiToken"));
    this.router.navigate(["test"]);
  }

  private onError(error: HttpErrorResponse): void {
  }
}
