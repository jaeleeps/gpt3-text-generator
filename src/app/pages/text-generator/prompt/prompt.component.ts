import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GPT3_ENGINES } from "../text-generator.data";
import {
  GPT3EngineInterface,
  TextGeneratorPromptRequestInferface,
  TextGeneratorPromptResponseInferface,
} from "../text-generator.model";
import { TextGeneratorRequestService } from "../services/text-generator-request.service";
import { AlertService } from "../alert.service";
import {environment} from "../../../../environments/environment";

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
    temperature: null,
    max_tokens: null,
    top_p: null,
    frequency_penalty: null,
    presence_penalty: null,
  };

  public engines: Array<GPT3EngineInterface>;
  private _selectedEngine: GPT3EngineInterface;
  private _responseList = [];

  constructor(
    private formBuilder: FormBuilder,
    private textGeneratorRequestService: TextGeneratorRequestService,
    private alert: AlertService
  ) {}

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

    this.promptValidationForm.get("textarea").valueChanges.subscribe((val) => {
      this.data.prompt = val;
    });

    console.log("$ENV", $ENV)
    console.log('environment.gpt3_api_key', environment.gpt3_api_key)
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

  get list() {
    return this._responseList;
  }

  submitPrompt() {
    this.promptSubmit = true;
    if (this.promptValidationForm.status === "VALID") {
      const data: TextGeneratorPromptRequestInferface = { ...this.data };
      this.textGeneratorRequestService
        .getGPT3CompletionResponse(this.selectedEngine.name, data)
        .toPromise()
        .then((res: TextGeneratorPromptResponseInferface) => {
          if (res) {
            console.log(res);
            this.addResponse(this.selectedEngine.name, data, res);
            this.alert.timer("Text Generated!", null, "success");
          } else {
            this.alert.timer("Text Completion Failed!", null, "success");
          }
        });
    }
  }

  onChangeEngine(val: GPT3EngineInterface) {
    this.selectedEngine = val;
  }

  addResponse(
    engine: string,
    requestData: TextGeneratorPromptRequestInferface,
    responseData: TextGeneratorPromptResponseInferface
  ): void {
    this.list.push({
      engine: engine,
      req: requestData,
      res: responseData,
      received_at: new Date(),
    });
  }
}
