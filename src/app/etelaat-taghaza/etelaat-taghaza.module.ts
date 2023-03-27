import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtelaatTaghazaRoutingModule } from './etelaat-taghaza-routing.module';
import { EtelaatTaghazaComponent } from './etelaat-taghaza/etelaat-taghaza.component';
import {ShareModule} from "../shared/sharedModule/share.module";
import { MateghazieDarkhastComponent } from './mateghazie-darkhast/mateghazie-darkhast.component';
import { EtelaatMoshtarekComponent } from './etelaat-moshtarek/etelaat-moshtarek.component';
import { FileHaiePeivastComponent } from './file-haie-peivast/file-haie-peivast.component';


@NgModule({
  declarations: [
    EtelaatTaghazaComponent,
    MateghazieDarkhastComponent,
    EtelaatMoshtarekComponent,
    FileHaiePeivastComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    EtelaatTaghazaRoutingModule
  ]
})
export class EtelaatTaghazaModule { }
