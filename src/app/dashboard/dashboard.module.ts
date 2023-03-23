import { NgModule } from '@angular/core';


import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ShareModule} from "../shared/share/share.module";
import { AmarVaDarkhasthaComponent } from './amar-va-darkhastha/amar-va-darkhastha.component';
import { EtelaatAmaryComponent } from './etelaat-amary/etelaat-amary.component';
import { EtelaatDarkhasthaComponent } from './etelaat-darkhastha/etelaat-darkhastha.component';
import { ShowChildRowEtelaatDarkhasthaComponent } from './show-child-row-etelaat-darkhastha/show-child-row-etelaat-darkhastha.component';




@NgModule({
  declarations: [
    DashboardComponent,
    AmarVaDarkhasthaComponent,
    EtelaatAmaryComponent,
    EtelaatDarkhasthaComponent,
    ShowChildRowEtelaatDarkhasthaComponent
  ],
  imports: [
    DashboardRoutingModule,
    ShareModule
  ]
})
export class DashboardModule { }
