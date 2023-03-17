import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ToolbarComponent} from "../shared/toolbar/toolbar.component";


@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
