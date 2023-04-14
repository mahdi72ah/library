import { NgModule } from '@angular/core';
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {FormsModule} from "@angular/forms";
import {TreeModule} from "primeng/tree";
import {DataTablesModule} from "angular-datatables";
import {NgImageSliderModule} from "ng-image-slider";
import {
  SharedSliderComponentComponent
} from "../sharedSliderComponent/shared-slider-component/shared-slider-component.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TreeTableModule} from "primeng/treetable";
import {InputTextModule} from "primeng/inputtext";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";







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
    NgImageSliderModule,
    FontAwesomeModule,
    TreeTableModule,
    InputTextModule
  ],
  exports:[
    HttpClientModule,
    CommonModule,
    ToolbarComponent,
    SharedSliderComponentComponent,
    FormsModule,
    TreeModule,
    DataTablesModule,
    NgImageSliderModule,
    TreeTableModule,
    InputTextModule
  ]
})
export class ShareModule { }
