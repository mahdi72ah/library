import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDarkhasthaieFaalRoutingModule } from './list-darkhasthaie-faal-routing.module';
import { ListDarkhasthaieFaalComponent } from './list-darkhasthaie-faal/list-darkhasthaie-faal.component';
import {DataTablesModule} from "angular-datatables";


@NgModule({
  declarations: [
    ListDarkhasthaieFaalComponent
  ],
    imports: [
        CommonModule,
        ListDarkhasthaieFaalRoutingModule,
        DataTablesModule
    ]
})
export class ListDarkhasthaieFaalModule { }