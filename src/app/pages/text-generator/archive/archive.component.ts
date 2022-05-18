import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "../services/local-storage.service";
import { AlertService } from "../services/alert.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-archive",
  templateUrl: "./archive.component.html",
  styleUrls: ["./archive.component.scss"],
})
export class ArchiveComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  responseList = [];

  constructor(
    private alert: AlertService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Text Generator" },
      { label: "Archive", active: true },
    ];
  }

  get observableList() {
    return this.localStorageService.observableList;
  }

  onClickEmptyListCard(): void {
    this.router.navigateByUrl("text-generator/prompt");
  }
}
