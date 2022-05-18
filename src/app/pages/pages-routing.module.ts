import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TextGeneratorHomeComponent } from "./text-generator/text-generator-home/text-generator-home.component";

const routes: Routes = [
  { path: "", redirectTo: "text-generator-home" },
  { path: "text-generator-home", component: TextGeneratorHomeComponent },
  {
    path: "text-generator",
    loadChildren: () =>
      import("./text-generator/text-generator.module").then(
        (m) => m.TextGeneratorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
