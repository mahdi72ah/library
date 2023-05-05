import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListDarkhasthaieFaalComponent} from "./list-darkhasthaie-faal/list-darkhasthaie-faal.component";

const routes: Routes = [
  {path:'',component:ListDarkhasthaieFaalComponent,
    children:[
      {path:'InboxIsArchive',component:ListDarkhasthaieFaalComponent,data: { status: 'آرشیو شده' }},
      {path:'Inbox/:id',component:ListDarkhasthaieFaalComponent},
      {path:'Inbox',component:ListDarkhasthaieFaalComponent},
      {path:'InboxIsRead',component:ListDarkhasthaieFaalComponent,data: { status: 'خوانده شده' }}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDarkhasthaieFaalRoutingModule { }
