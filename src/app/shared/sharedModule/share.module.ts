import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {TreeModule} from "primeng/tree";
import {DataTablesModule} from "angular-datatables";
import {NgImageSliderModule} from "ng-image-slider";
import {
  SharedSliderComponentComponent
} from "../sharedSliderComponent/shared-slider-component/shared-slider-component.component";



@NgModule({
  declarations: [
    ToolbarComponent,
    SharedSliderComponentComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    TreeModule,
    DataTablesModule,
    NgImageSliderModule
  ],
  exports:[
    ToolbarComponent,
    SharedSliderComponentComponent,
    CommonModule,
    HttpClientModule,
    FormsModule,
    TreeModule,
    DataTablesModule,
    NgImageSliderModule
  ]
})
export class ShareModule { }
