import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PromptComponent } from "./prompt/prompt.component";
import {ArchiveComponent} from "./archive/archive.component";

const routes: Routes = [
  { path: "", redirectTo: "prompt"},
  { path: "prompt", component: PromptComponent },
  { path: "archive", component: ArchiveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextGeneratorRoutingModule {}
