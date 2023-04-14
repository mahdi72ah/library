import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtelaatTaghazaRoutingModule } from './etelaat-taghaza-routing.module';
import { EtelaatTaghazaComponent } from './etelaat-taghaza/etelaat-taghaza.component';
import {ShareModule} from "../shared/sharedModule/share.module";
import { MateghazieDarkhastComponent } from './mateghazie-darkhast/mateghazie-darkhast.component';
import { EtelaatMoshtarekComponent } from './etelaat-moshtarek/etelaat-moshtarek.component';
import { FileHaiePeivastComponent } from './file-haie-peivast/file-haie-peivast.component';
import { EghdamatMarbotBeKartablComponent } from './eghdamat-marbot-be-kartabl/eghdamat-marbot-be-kartabl.component';
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    EtelaatTaghazaComponent,
    MateghazieDarkhastComponent,
    EtelaatMoshtarekComponent,
    FileHaiePeivastComponent,
    EghdamatMarbotBeKartablComponent
  ],
  imports: [
    ShareModule,
    CommonModule,
    EtelaatTaghazaRoutingModule
  ]
})
export class EtelaatTaghazaModule { }
