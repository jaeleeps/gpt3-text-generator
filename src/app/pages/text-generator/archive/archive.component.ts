import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "../local-storage.service";
import { AlertService } from "../alert.service";

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
    private localStorageService: LocalStorageService
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
}
