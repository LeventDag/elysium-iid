import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

import * as Constants from "../collections/Constants";

@Component({
  selector: "join-root",
  templateUrl: "./join.component.html",
  styleUrls: ["./join.component.css"]
})
export class JoinComponent implements OnInit {
  images_mapping = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log("lang = " + params["lang"]);
    });
  }
}
