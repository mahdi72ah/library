import {NgModule} from '@angular/core';
import {ListDarkhasthaieFaalRoutingModule} from './list-darkhasthaie-faal-routing.module';
import {ListDarkhasthaieFaalComponent} from './list-darkhasthaie-faal/list-darkhasthaie-faal.component';
import {DataTablesModule} from "angular-datatables";
import {CommonModule} from "@angular/common";
import { ListDarkhasthaieFaalBaEtelaatBishtarComponent } from './list-darkhasthaie-faal-ba-etelaat-bishtar/list-darkhasthaie-faal-ba-etelaat-bishtar.component';
import {ListDarkhasthaieFaalMainComponent} from "./list-darkhasthaie-faal-main/list-darkhasthaie-faal-main.component";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import { ForSearchComponent } from './for-search/for-search.component';
import { SaierTabComponent } from './for-search/TabComponent/saier-tab/saier-tab.component';
import { ShomareDarkhastTabComponent } from './for-search/TabComponent/shomare-darkhast-tab/shomare-darkhast-tab.component';
import {ShareModule} from "../shared/sharedModule/share.module";
import {TabsModule} from "ngx-bootstrap/tabs";
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeTableModule } from 'primeng/treetable';
import {ListboxModule} from "primeng/listbox";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    declarations: [
        ListDarkhasthaieFaalComponent,
        ListDarkhasthaieFaalBaEtelaatBishtarComponent,
        ListDarkhasthaieFaalMainComponent,
        ForSearchComponent,
        SaierTabComponent,
        ShomareDarkhastTabComponent
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
    FormsModule,
    ShareModule,
    TabsModule,
    TreeModule,
    TreeSelectModule,
    TreeTableModule,
    ListboxModule,
    NgbDropdownModule
  ]
})
export class ListDarkhasthaieFaalModule {
}
