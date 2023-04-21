import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {LanguageApp} from "../../dashboard/shared/class/LanguageApp";
import {ImoshahedeSabeghe} from "../shared/interFace/ImoshahedeSabeghe";


@Component({
  selector: 'app-eghdamat-marbot-be-kartabl',
  templateUrl: './eghdamat-marbot-be-kartabl.component.html',
  styleUrls: ['./eghdamat-marbot-be-kartabl.component.css']
})
export class EghdamatMarbotBeKartablComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  data:ImoshahedeSabeghe[]=[];
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: true,
      language: LanguageApp.persian_datatables
    };

    this.data = [
      {
        tarikhEtmam:'',tarikhIjad:'1402/01/28-11:14:48',akhzKonande:'',marhale:'تایید کارشناس',paraf:'',status:'در دست اقدام'
      },
      {
        tarikhEtmam:'1402/01/28-11:14:48',tarikhIjad:'1402/01/28-11:14:15',akhzKonande:'تعاونی خاتم الانبیاء - پیمانکار فرهادگرد',marhale:'بررسی اولیه درخواست کننده',paraf:'55132404214',status:'تمام شده'
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


}// Enf Class
