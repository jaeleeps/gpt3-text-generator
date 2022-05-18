import { Injectable } from "@angular/core";
import { TextGeneratorCompletionInterface } from "./text-generator.model";
import { BehaviorSubject, Observable } from "rxjs";

const GPT3_TEXT_COMPLETION_LS_KEY: string = "gpt3-text-completion-archive-list";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  private _entries: {}[] = [];
  private _observableList: BehaviorSubject<{}[]> = new BehaviorSubject([]);

  constructor() {
    this.initSetting();
  }

  initSetting() {
    const existingEntries = JSON.parse(
      localStorage.getItem(GPT3_TEXT_COMPLETION_LS_KEY)
    );
    if (existingEntries) {
      this._entries = existingEntries;
    } else {
      this._entries = [];
    }
    console.log(this._entries);
    this._observableList.next(this._entries);
  }

  get observableList(): Observable<{}[]> {
    return this._observableList.asObservable();
  }

  appendItem(data: TextGeneratorCompletionInterface) {
    const id = data.res.id;
    localStorage.setItem(id, JSON.stringify(data));
    this._entries.push(data);
    localStorage.setItem(
      GPT3_TEXT_COMPLETION_LS_KEY,
      JSON.stringify(this._entries)
    );
    this._observableList.next(this._entries);
  }
}
