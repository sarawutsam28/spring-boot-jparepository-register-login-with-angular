import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { ServiceNameService } from "../_service/auth.service";
import { AlertifyService } from "../_service/alertify.service";
@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private serviceNameService: ServiceNameService,
    private router: Router,
    private alertify: AlertifyService // private alertify: AlertifyService
  ) {}

  canActivate(): boolean {
    if (this.serviceNameService.loggedIn()) {
      return true;
    }

    this.alertify.error("You shall not pass!!!");
    this.router.navigate([""]);
    return false;
  }
}
