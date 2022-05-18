import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-text-generator-home",
  templateUrl: "./text-generator-home.component.html",
  styleUrls: ["./text-generator-home.component.scss"],
})
export class TextGeneratorHomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigateByUrl("text-generator/prompt");
  }
}
