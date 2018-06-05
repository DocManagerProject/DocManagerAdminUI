import {Injectable} from "@angular/core";

@Injectable()
export class StorageManager {

  getApiToken(): string {
    return this.getStorageEntry("apiToken");
  }

  saveApiToken(apiToken: string) : void {
    this.saveStorageEntry("apiToken", apiToken);
  }

  clearApiToken(): void {
    this.clearStorageEntry("apiToken");
  }

  private saveStorageEntry(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  private getStorageEntry(key: string): string {
    return sessionStorage.getItem(key);
  }

  private clearStorageEntry(key: string): void {
    sessionStorage.removeItem(key);
  }
}
