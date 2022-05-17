import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GPT3_ENGINES } from "../text-generator.data";
import {
  GPT3EngineInterface,
  TextGeneratorPromptRequestInferface,
} from "../text-generator.model";

@Component({
  selector: "app-prompt",
  templateUrl: "./prompt.component.html",
  styleUrls: ["./prompt.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class PromptComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  promptValidationForm: FormGroup;

  promptSubmit: boolean;

  requestData: TextGeneratorPromptRequestInferface = {
    prompt: null,
    engine: null,
    temperature: null,
    max_tokens: null,
    top_p: null,
    frequency_penalty: null,
    presence_penalty: null,
  };

  public engines: Array<GPT3EngineInterface>;
  private _selectedEngine: GPT3EngineInterface;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.engines = GPT3_ENGINES;
    this.breadCrumbItems = [
      { label: "Text Generator" },
      { label: "Prompt", active: true },
    ];

    this.promptValidationForm = this.formBuilder.group({
      textarea: ["", [Validators.required]],
      engine: ["", [Validators.required]],
    });
  }

  get form() {
    return this.promptValidationForm.controls;
  }

  get selectedEngine(): GPT3EngineInterface {
    return this._selectedEngine;
  }

  set selectedEngine(value: GPT3EngineInterface) {
    console.log(value);
    this._selectedEngine = value;
    this.requestData.max_tokens = value.max_tokens.default;
    this.requestData.temperature = value.temperature.default;
    this.requestData.top_p = value.top_p.default;
    this.requestData.frequency_penalty = value.frequency_penalty.default;
    this.requestData.presence_penalty = value.presence_penalty.default;
  }

  get data() {
    return this.requestData;
  }

  submitPrompt() {
    this.promptSubmit = true;
    if (this.promptValidationForm.status === "VALID") {
      console.log(this.data);
      // TODO: handle request
    }
  }

  onChangeEngine(val: GPT3EngineInterface) {
    this.selectedEngine = val;
  }
}
