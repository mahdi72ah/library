import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EtelaatTaghazaComponent} from "./etelaat-taghaza/etelaat-taghaza.component";

const routes: Routes = [
  {path:'',component:EtelaatTaghazaComponent,children:[
      {path:'etelaatTaghaza/:shomareDarkhast',component:EtelaatTaghazaComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtelaatTaghazaRoutingModule { }
