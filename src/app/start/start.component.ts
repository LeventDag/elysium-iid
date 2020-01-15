import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

import * as Constants from "../collections/Constants";

@Component({
  selector: "start-root",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.css"]
})
export class StartComponent implements OnInit {
  images_mapping = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    console.log("hELLO IM HERE");

    Constants.LANGUAGES.forEach(lang => {
      let file =
        Constants.ASSETS + Constants.FLAG_FOLDER + lang + Constants.IMG_EXT;
      this.images_mapping.push(file);
    });
  }

  public selectedLanguage(langIndex: number): void {
    let langCode = Constants.LANGUAGES[langIndex];
    this.router.navigate(["/join"], {
      queryParams: {
        lang: langCode
      }
    });
  }
}
