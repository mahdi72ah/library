import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {IfilePeivast} from "../shared/interFace/IfilePeivast";
import {LanguageApp} from "../../dashboard/shared/class/LanguageApp";
import {ImohasebatDarkhast} from "../shared/interFace/ImohasebatDarkhast";

@Component({
  selector: 'app-mohasebatarkhast',
  templateUrl: './mohasebatarkhast.component.html',
  styleUrls: ['./mohasebatarkhast.component.css']
})
export class MohasebatarkhastComponent implements OnInit, OnDestroy  {
  dtOptions: DataTables.Settings = {};
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  showSlider: boolean = false;

  data: ImohasebatDarkhast[] = [];

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: true,
      language: LanguageApp.persian_datatables
    };

    this.data = [
      {
        namekhedmat: 'بازسازی انشعاب', mablagh: 0, tedad: 1, olgoMohasebe: 'بازسازی انشعاب'
      }
    ];
    setTimeout(() => {
      // @ts-ignore
      this.dtTrigger.next();
    }, 1000);
  }// End ngOnInit

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }







}// End Class
