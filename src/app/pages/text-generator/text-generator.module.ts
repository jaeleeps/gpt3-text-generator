import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  NgbCollapseModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbNavModule,
  NgbTooltipModule,
} from "@ng-bootstrap/ng-bootstrap";
import { PagesRoutingModule } from "../pages-routing.module";
import { NgApexchartsModule } from "ng-apexcharts";
import { UiModule } from "../ui/ui.module";
import { FormModule } from "../form/form.module";
import { TablesModule } from "../tables/tables.module";
import { IconsModule } from "../icons/icons.module";
import { ChartModule } from "../chart/chart.module";
import { WidgetModule } from "../../shared/widget/widget.module";
import { UIModule } from "../../shared/ui/ui.module";
import { HttpClientModule } from "@angular/common/http";
import { SimplebarAngularModule } from "simplebar-angular";
import { LightboxModule } from "ngx-lightbox";
import { PromptComponent } from "./prompt/prompt.component";
import { TextGeneratorRoutingModule } from "./text-generator-routing.module";
import { NgSelectModule } from "@ng-select/ng-select";
import { Ng5SliderModule } from "ng5-slider";
import { NgArrayPipesModule } from "ngx-pipes";
import { TextGeneratorResponseCardComponent } from './components/text-generator-response-card/text-generator-response-card.component';

@NgModule({
  declarations: [PromptComponent, TextGeneratorResponseCardComponent],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    PagesRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UIModule,
    UiModule,
    FormModule,
    TablesModule,
    IconsModule,
    ChartModule,
    WidgetModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbCollapseModule,
    SimplebarAngularModule,
    LightboxModule,

    TextGeneratorRoutingModule,
    NgSelectModule,
    Ng5SliderModule,
    NgArrayPipesModule,
  ],
})
export class TextGeneratorModule {}
