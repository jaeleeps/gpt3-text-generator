import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PromptComponent } from "./prompt/prompt.component";

const routes: Routes = [{ path: "prompt", component: PromptComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextGeneratorRoutingModule {}
