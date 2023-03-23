import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListDarkhasthaieFaalComponent} from "./list-darkhasthaie-faal/list-darkhasthaie-faal.component";

const routes: Routes = [
  {path:'',component:ListDarkhasthaieFaalComponent,children:[
      {path:'listGrad/:id',component:ListDarkhasthaieFaalComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDarkhasthaieFaalRoutingModule { }
