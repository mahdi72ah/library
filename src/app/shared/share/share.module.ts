import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {TreeModule} from "primeng/tree";
import {DataTablesModule} from "angular-datatables";



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    TreeModule,
    DataTablesModule
  ],
  exports:[
    ToolbarComponent,
    CommonModule,
    HttpClientModule,
    FormsModule,
    TreeModule,
    DataTablesModule
  ]
})
export class ShareModule { }
