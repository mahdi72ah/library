import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListDarkhasthaieFaalComponent} from "./list-darkhasthaie-faal/list-darkhasthaie-faal.component";
import {
  ListDarkhasthaieFaalBaEtelaatBishtarComponent
} from "./list-darkhasthaie-faal-ba-etelaat-bishtar/list-darkhasthaie-faal-ba-etelaat-bishtar.component";
import {ListDarkhasthaieFaalMainComponent} from "./list-darkhasthaie-faal-main/list-darkhasthaie-faal-main.component";
import {StatusReadResolve} from "./shared/statusReadResolve/statusReadResolve";
import {ForSearchComponent} from "./for-search/for-search.component";
import {SaierTabComponent} from "./for-search/TabComponent/saier-tab/saier-tab.component";
import {
  ShomareDarkhastTabComponent
} from "./for-search/TabComponent/shomare-darkhast-tab/shomare-darkhast-tab.component";


const routes: Routes = [
  {path:'',component:ListDarkhasthaieFaalMainComponent,
    children:[
      {path:'InboxIsArchive/:item',component:ListDarkhasthaieFaalComponent,resolve:{status: StatusReadResolve}},
      {path:'Inbox/:id',component:ListDarkhasthaieFaalComponent},
      {path:'Inbox',component:ListDarkhasthaieFaalComponent},
      {path:'InboxIsRead/:item',component:ListDarkhasthaieFaalComponent,resolve:{status: StatusReadResolve}},
      {path:'InboxIsGetMe/:item',component:ListDarkhasthaieFaalComponent,resolve:{status: StatusReadResolve}},
      {path:'IsGetOther/:item',component:ListDarkhasthaieFaalComponent,resolve:{status: StatusReadResolve}},
      {path:'NotGet/:item',component:ListDarkhasthaieFaalComponent,resolve:{status: StatusReadResolve}},
      {path:'forSearch/:item',component:ForSearchComponent,resolve:{status: StatusReadResolve},children:[
          {path:'saier',component:SaierTabComponent},
          {path:'shomareDarkhast',component:ShomareDarkhastTabComponent}
        ]},
      {path:'inboxwithinfo',component:ListDarkhasthaieFaalBaEtelaatBishtarComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDarkhasthaieFaalRoutingModule { }
