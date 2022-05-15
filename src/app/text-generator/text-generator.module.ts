import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  NgbCollapseModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbNavModule,
  NgbTooltipModule
} from "@ng-bootstrap/ng-bootstrap";
import {PagesRoutingModule} from "../pages/pages-routing.module";
import {NgApexchartsModule} from "ng-apexcharts";
import {UiModule} from "../pages/ui/ui.module";
import {FormModule} from "../pages/form/form.module";
import {TablesModule} from "../pages/tables/tables.module";
import {IconsModule} from "../pages/icons/icons.module";
import {ChartModule} from "../pages/chart/chart.module";
import {WidgetModule} from "../shared/widget/widget.module";
import {UIModule} from "../shared/ui/ui.module";
import {HttpClientModule} from "@angular/common/http";
import {SimplebarAngularModule} from "simplebar-angular";
import {LightboxModule} from "ngx-lightbox";



@NgModule({
  declarations: [],
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
    LightboxModule
  ]
})
export class TextGeneratorModule { }
