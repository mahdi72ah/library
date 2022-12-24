import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TableModule} from "../../projects/table/src/lib/table.module";



const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'table',component:TableModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
