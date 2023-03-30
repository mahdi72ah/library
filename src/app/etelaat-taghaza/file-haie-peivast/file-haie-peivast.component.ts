import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from "rxjs";
import { NgImageSliderComponent } from 'ng-image-slider';
import {LanguageApp} from "../../dashboard/shared/class/LanguageApp";
import {IfilePeivast} from "../shared/interFace/IfilePeivast";

@Component({
  selector: 'app-file-haie-peivast',
  templateUrl: './file-haie-peivast.component.html',
  styleUrls: ['./file-haie-peivast.component.css']
})
export class FileHaiePeivastComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  showSlider:boolean=false;

  data: IfilePeivast[] = [];

  imageObject= [
    {
      image: '../../../../assets/icon/2 (1).jpg',
      thumbImage: '../../../../assets/icon/2 (1).jpg',
      title: 'سند مالکیت عسل حمیدی فریمانی'
    },
    {
      image: '../../../../assets/icon/3.jpg',
      thumbImage: '../../../../assets/icon/3.jpg',
      title: 'پروانه ساختمانی عسل حمیدی فریمانی'
    },
    {
      image: '../../../../assets/icon/4.jpg',
      thumbImage: '../../../../assets/icon/4.jpg',
      title: 'صفحه دوم پروانه ساختمانی عسل حمیدی فریمانی'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: true,
      language: LanguageApp.persian_datatables
    };

    this.data = [
      {
      noeFile:'JPG',status:true,tarikhBargozary:'1402/01/06-10:26:15',tarikhAkharinTaghiir:'1402/01/06-10:26:15',tozihat:'بارگذاری شده توسط پیشخوان فریمان-قربانی',title:'پروانه ساخت'
      },
      {
        noeFile:'JPG',status:true,tarikhBargozary:'1402/01/06-10:26:03',tarikhAkharinTaghiir:'1402/01/06-10:26:03',tozihat:'بارگذاری شده توسط پیشخوان فریمان-قربانی',title:'پروانه ساخت'
      },
      {
        noeFile:'JPG',status:true,tarikhBargozary:'1402/01/06-10:25:47',tarikhAkharinTaghiir:'1402/01/06-10:25:47',tozihat:'بارگذاری شده توسط پیشخوان فریمان-قربانی',title:'سند ملک'
      },
    ];
    setTimeout(() => {
      // @ts-ignore
      this.dtTrigger.next();
    }, 1000);

  } // end ngOnInit

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  scrollTopAndShow(){
    //window.scrollTo(0, 0);
    $("html, body").animate({ scrollTop: 0 }, "slow");
    this.showSlider=true;
  }

  close(close:any){
    this.showSlider=close;
    // @ts-ignore
    $("html, body").animate({ scrollTop: $('#slide').offset().top }, 3000);
  }

} // end Class
