import {NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ListDarkhasthaieFaalRoutingModule} from './list-darkhasthaie-faal-routing.module';
import {ListDarkhasthaieFaalComponent} from './list-darkhasthaie-faal/list-darkhasthaie-faal.component';
import {DataTablesModule} from "angular-datatables";
import {CommonModule} from "@angular/common";
import { ListDarkhasthaieFaalBaEtelaatBishtarComponent } from './list-darkhasthaie-faal-ba-etelaat-bishtar/list-darkhasthaie-faal-ba-etelaat-bishtar.component';
import {ListDarkhasthaieFaalMainComponent} from "./list-darkhasthaie-faal-main/list-darkhasthaie-faal-main.component";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {StatusReadResolve} from "./shared/statusReadResolve/statusReadResolve";
import { ForSearchComponent } from './for-search/for-search.component';


@NgModule({
    declarations: [
        ListDarkhasthaieFaalComponent,
        ListDarkhasthaieFaalBaEtelaatBishtarComponent,
        ListDarkhasthaieFaalMainComponent,
        ForSearchComponent
    ],
    exports: [

    ],
  providers:[

  ],
  imports: [
    CommonModule,
    ListDarkhasthaieFaalRoutingModule,
    DataTablesModule,
    DropdownModule,
    FormsModule
  ]
})
export class ListDarkhasthaieFaalModule {
}
