import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Clipboard } from "@angular/cdk/clipboard";
import { TextGeneratorCompletionInterface } from "../../text-generator.model";
import { AlertService } from "../../alert.service";

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

  @Output() alertEventEmitter: EventEmitter<{}> = new EventEmitter();

  isArchived: boolean = false;

  constructor(private clipboard: Clipboard, private alert: AlertService) {}

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
    this.isArchived = true;
    this.alert.timer("Item Archived!", null, "success");
  }
}
