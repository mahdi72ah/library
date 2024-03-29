import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtelaatTaghazaRoutingModule } from './etelaat-taghaza-routing.module';
import { EtelaatTaghazaComponent } from './etelaat-taghaza/etelaat-taghaza.component';
import {ShareModule} from "../shared/sharedModule/share.module";
import { MateghazieDarkhastComponent } from './mateghazie-darkhast/mateghazie-darkhast.component';
import { EtelaatMoshtarekComponent } from './etelaat-moshtarek/etelaat-moshtarek.component';
import { FileHaiePeivastComponent } from './file-haie-peivast/file-haie-peivast.component';
import { EghdamatMarbotBeKartablComponent } from './eghdamat-marbot-be-kartabl/eghdamat-marbot-be-kartabl.component';
import { MohasebatarkhastComponent } from './mohasebatarkhast/mohasebatarkhast.component';
import {ButtonModule} from "primeng/button";
import {ListDarkhasthaieFaalModule} from "../list-darkhasthaie-faal/list-darkhasthaie-faal.module";



@NgModule({
  declarations: [
    EtelaatTaghazaComponent,
    MateghazieDarkhastComponent,
    EtelaatMoshtarekComponent,
    FileHaiePeivastComponent,
    EghdamatMarbotBeKartablComponent,
    MohasebatarkhastComponent
  ],
    imports: [
        ShareModule,
        CommonModule,
        EtelaatTaghazaRoutingModule,
        ButtonModule,
        ListDarkhasthaieFaalModule
    ]
})
export class EtelaatTaghazaModule { }
