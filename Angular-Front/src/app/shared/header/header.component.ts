import { Component, OnInit } from "@angular/core";
import { AuthGuard } from "src/app/guards/auth-guard.service";
import { AuthService } from "src/app/services/auth/auth.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isAuthenticated();
  }

  signout() {
    this.authService.signOut();
  }
}
