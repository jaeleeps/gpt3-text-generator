import { Component, Input, OnInit } from "@angular/core";
import { Clipboard } from "@angular/cdk/clipboard";
import { AlertService } from "../../alert.service";
import { LocalStorageService } from "../../local-storage.service";
import { TextGeneratorCompletionArchivedItemInterface } from "../../text-generator.model";

@Component({
  selector: "app-text-generator-archive-card",
  templateUrl: "./text-generator-archive-card.component.html",
  styleUrls: ["./text-generator-archive-card.component.scss"],
})
export class TextGeneratorArchiveCardComponent implements OnInit {
  get data(): TextGeneratorCompletionArchivedItemInterface {
    return this._data;
  }

  @Input()
  set data(value: TextGeneratorCompletionArchivedItemInterface) {
    this._data = value;
  }

  private _data: TextGeneratorCompletionArchivedItemInterface;

  isArchived: boolean = true;

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

  onClickRemove(): void {
    if (!this.isArchived) {
      return;
    }
    const id: string = this.data.res.id;
    this.localStorageService.removeItem(id);
    this.isArchived = false;
    this.alert.timer("Item Removed!", null, "success");
  }

  onClickUpdateRating(rating: number): void {
    this.data.rating = rating;
    const id: string = this.data.res.id;
    this.localStorageService.updateItem(id, this.data);
  }
}
