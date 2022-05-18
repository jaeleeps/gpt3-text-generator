import { Component, Input, OnInit } from "@angular/core";
import { Clipboard } from "@angular/cdk/clipboard";
import {
  TextGeneratorCompletionArchivedItemInterface,
  TextGeneratorCompletionInterface,
} from "../../text-generator.model";
import { AlertService } from "../../alert.service";
import { LocalStorageService } from "../../local-storage.service";

@Component({
  selector: "app-text-generator-response-card",
  templateUrl: "./text-generator-response-card.component.html",
  styleUrls: ["./text-generator-response-card.component.scss"],
})
export class TextGeneratorResponseCardComponent implements OnInit {
  get data(): TextGeneratorCompletionInterface {
    return this._data;
  }

  @Input()
  set data(value: TextGeneratorCompletionInterface) {
    this._data = value;
  }

  private _data: TextGeneratorCompletionInterface;

  isArchived: boolean = false;

  constructor(
    private clipboard: Clipboard,
    private alert: AlertService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  onClickCopy(text: string): void {
    const pending = this.clipboard.beginCopy(text);
    let remainingAttempts = 3;
    const attempt = () => {
      const result = pending.copy();
      if (!result && --remainingAttempts) {
        setTimeout(attempt);
      } else {
        pending.destroy();
        this.alert.timer("Text Copied!", text, "success");
      }
    };
    attempt();
  }

  onClickArchive(): void {
    if (this.isArchived) {
      return;
    }
    const archiveItem: TextGeneratorCompletionArchivedItemInterface = {
      ...this.data,
      rating: 0,
    };
    this.localStorageService.appendItem(archiveItem);
    this.isArchived = true;
    this.alert.timer("Item Archived!", null, "success");
  }
}
