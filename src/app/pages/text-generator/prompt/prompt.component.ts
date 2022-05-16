import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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

  public engines: Array<{ id: number; name: string }> = [
    { id: 0, name: "text-curie-001" },
  ];

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Text Generator" },
      { label: "Prompt", active: true },
    ];

    this.promptValidationForm = this.formBuilder.group({
      textarea: ["", [Validators.required]],
      engine: [null, [Validators.required]],
    });
  }

  get form() {
    return this.promptValidationForm.controls;
  }

  submitPrompt() {
    this.promptSubmit = true;
    console.log(this.form.engine.errors);
  }
}
