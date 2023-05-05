import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard/dashboard.component";
import {TableComponent} from "./table/table/table.component";
import {TreeViewComponent} from "./tree-view/tree-view.component";



const routes: Routes = [
  {path:'',component:DashboardComponent,pathMatch: 'full'},
  {path:'table',component:TableComponent},
  {path:'tree',component:TreeViewComponent},
  {path:"dashboard", loadChildren: () => import('./dashboard/dashboard.module').then(q => q.DashboardModule),},
  {path:"Main",loadChildren:()=>import('./list-darkhasthaie-faal/list-darkhasthaie-faal.module').then(q=>q.ListDarkhasthaieFaalModule)},
  {path:'etelaatTaghaza',loadChildren:()=>import('./etelaat-taghaza/etelaat-taghaza.module').then(q=>q.EtelaatTaghazaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
