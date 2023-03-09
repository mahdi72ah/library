import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TableComponent} from "./table/table/table.component";
import {TreeViewComponent} from "./tree-view/tree-view.component";




const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'table',component:TableComponent},
  {path:'tree',component:TreeViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
