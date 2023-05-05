import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListDarkhasthaieFaalComponent} from "./list-darkhasthaie-faal/list-darkhasthaie-faal.component";
import {
  ListDarkhasthaieFaalBaEtelaatBishtarComponent
} from "./list-darkhasthaie-faal-ba-etelaat-bishtar/list-darkhasthaie-faal-ba-etelaat-bishtar.component";
import {ListDarkhasthaieFaalMainComponent} from "./list-darkhasthaie-faal-main/list-darkhasthaie-faal-main.component";


const routes: Routes = [
  {path:'',component:ListDarkhasthaieFaalMainComponent,
    children:[
      {path:'InboxIsArchive',component:ListDarkhasthaieFaalComponent,data: { status: 'آرشیو شده' }},
      {path:'Inbox/:id',component:ListDarkhasthaieFaalComponent},
      {path:'Inbox',component:ListDarkhasthaieFaalComponent},
      {path:'InboxIsRead',component:ListDarkhasthaieFaalComponent,data: { status: 'خوانده شده' }},
      {path:'inboxwithinfo',component:ListDarkhasthaieFaalBaEtelaatBishtarComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDarkhasthaieFaalRoutingModule { }
