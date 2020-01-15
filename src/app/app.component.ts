import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

export interface Language {
  lang: string;
  code: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.router.navigate(["/start"]); //goto start
  }
}
