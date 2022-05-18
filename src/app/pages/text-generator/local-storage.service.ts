import { Injectable } from "@angular/core";
import { TextGeneratorCompletionArchivedItemInterface } from "./text-generator.model";
import { BehaviorSubject, Observable } from "rxjs";

const GPT3_TEXT_COMPLETION_LS_KEY: string = "gpt3-text-completion-archive-list";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  private _entries: TextGeneratorCompletionArchivedItemInterface[] = [];
  private _observableList: BehaviorSubject<
    TextGeneratorCompletionArchivedItemInterface[]
  > = new BehaviorSubject([]);

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

  synchonizeList(): void {
    localStorage.setItem(
      GPT3_TEXT_COMPLETION_LS_KEY,
      JSON.stringify(this._entries)
    );
    this._observableList.next(this._entries);
  }

  appendItem(data: TextGeneratorCompletionArchivedItemInterface): void {
    const id = data.res.id;
    localStorage.setItem(id, JSON.stringify(data));
    this._entries.push(data);
    this.synchonizeList();
  }

  removeItem(id: string): void {
    try {
      window.localStorage.removeItem(id);
      this._entries = this._entries.filter(
        (item: TextGeneratorCompletionArchivedItemInterface) =>
          item.res.id !== id
      );
      this.synchonizeList();
      console.log(this._entries);
    } catch (e) {
      // TODO: handle err
    }
  }

  updateItem(
    id: string,
    data: TextGeneratorCompletionArchivedItemInterface
  ): void {
    try {
      window.localStorage.removeItem(id);
      localStorage.setItem(id, JSON.stringify(data));
      this._entries = this._entries.map(
        (item: TextGeneratorCompletionArchivedItemInterface, index) => {
          return item.res.id === id ? data : item;
        }
      );
      this.synchonizeList();
      console.log(this._entries);
    } catch (e) {
      // TODO: handle err
    }
  }
}
