import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IlistDarkhasthaieFaal} from "../shared/interFace/IlistDarkhasthaieFaal";
import {Subject} from "rxjs";
import {LanguageApp} from "../../dashboard/shared/class/LanguageApp";

@Component({
  selector: 'app-list-darkhasthaie-faal',
  templateUrl: './list-darkhasthaie-faal.component.html',
  styleUrls: ['./list-darkhasthaie-faal.component.css']
})
export class ListDarkhasthaieFaalComponent implements OnInit,OnDestroy{

  id:string='';
  dataTotal:IlistDarkhasthaieFaal[]=[];
  data:IlistDarkhasthaieFaal[]=[];
  newData:IlistDarkhasthaieFaal[]=[];

  dtOptions: DataTables.Settings = {};
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: true,
      language: LanguageApp.persian_datatables
    };

    this.dataTotal=[
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:1,shahr:'فرهادگرد',noeDarkhast:'بررسی صورتحساب',marhale:'بررسی مسئول تشخیص',ijadKonande:'معصومه سخاوتی',erjaDahande:'معصومه سخاوتی',tarikhErja:'1401/12/29-17:32:16',khande:'شده',akhzKonande:'معصومه سخاوتی',tozihat:'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'},
      {shomareDarkhast:2,shahr:'بخش مرکزی فریمان',noeDarkhast:'تعویض کنتور',marhale:'بررسی اولیه درخواست کننده',ijadKonande:'زهره صادق شریف',erjaDahande:'زهره صادق شریف',tarikhErja:'1401/12/24-11:06:09',khande:'نشده',akhzKonande:'',tozihat:'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'},
      {shomareDarkhast:2,shahr:'بخش مرکزی فریمان',noeDarkhast:'تعویض کنتور',marhale:'بررسی اولیه درخواست کننده',ijadKonande:'زهره صادق شریف',erjaDahande:'زهره صادق شریف',tarikhErja:'1401/12/24-11:06:09',khande:'نشده',akhzKonande:'',tozihat:'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'},
      {shomareDarkhast:2,shahr:'بخش مرکزی فریمان',noeDarkhast:'تعویض کنتور',marhale:'بررسی اولیه درخواست کننده',ijadKonande:'زهره صادق شریف',erjaDahande:'زهره صادق شریف',tarikhErja:'1401/12/24-11:06:09',khande:'نشده',akhzKonande:'',tozihat:'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'},
      {shomareDarkhast:2,shahr:'بخش مرکزی فریمان',noeDarkhast:'تعویض کنتور',marhale:'بررسی اولیه درخواست کننده',ijadKonande:'زهره صادق شریف',erjaDahande:'زهره صادق شریف',tarikhErja:'1401/12/24-11:06:09',khande:'نشده',akhzKonande:'',tozihat:'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'},
      {shomareDarkhast:3,shahr:'فرهادگرد',noeDarkhast:'تغییر اطلاعات تعرفه',marhale:'بررسی اولیه درخواست کننده',ijadKonande:'محمد ظفرزاده',erjaDahande:'محمد ظفرزاده کونی',tarikhErja:'1401/12/24-11:06:09',khande:'نشده',akhzKonande:'',tozihat:'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'},
      {shomareDarkhast:3,shahr:'فرهادگرد',noeDarkhast:'تغییر اطلاعات تعرفه',marhale:'بررسی اولیه درخواست کننده',ijadKonande:'محمد ظفرزاده',erjaDahande:'محمد ظفرزاده',tarikhErja:'1401/12/24-11:06:09',khande:'نشده',akhzKonande:'',tozihat:'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'},
      {shomareDarkhast:3,shahr:'فرهادگرد',noeDarkhast:'تغییر اطلاعات تعرفه',marhale:'بررسی اولیه درخواست کننده',ijadKonande:'محمد ظفرزاده',erjaDahande:'محمد ظفرزاده',tarikhErja:'1401/12/24-11:06:09',khande:'نشده',akhzKonande:'',tozihat:'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'},
      {shomareDarkhast:3,shahr:'فرهادگرد',noeDarkhast:'تغییر اطلاعات تعرفه',marhale:'بررسی اولیه درخواست کننده',ijadKonande:'محمد ظفرزاده',erjaDahande:'محمد ظفرزاده',tarikhErja:'1401/12/24-11:06:09',khande:'نشده',akhzKonande:'',tozihat:'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'},
      {shomareDarkhast:3,shahr:'فرهادگرد',noeDarkhast:'تغییر اطلاعات تعرفه',marhale:'بررسی اولیه درخواست کننده',ijadKonande:'محمد ظفرزاده',erjaDahande:'محمد ظفرزاده',tarikhErja:'1401/12/24-11:06:09',khande:'نشده',akhzKonande:'',tozihat:'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'},
      {shomareDarkhast:3,shahr:'فرهادگرد',noeDarkhast:'تغییر اطلاعات تعرفه',marhale:'بررسی اولیه درخواست کننده',ijadKonande:'محمد ظفرزاده',erjaDahande:'محمد ظفرزاده',tarikhErja:'1401/12/24-11:06:09',khande:'نشده',akhzKonande:'',tozihat:'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'},
      {shomareDarkhast:3,shahr:'فرهادگرد',noeDarkhast:'تغییر اطلاعات تعرفه',marhale:'بررسی اولیه درخواست کننده',ijadKonande:'محمد ظفرزاده',erjaDahande:'محمد ظفرزاده',tarikhErja:'1401/12/24-11:06:09',khande:'نشده',akhzKonande:'',tozihat:'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'},
    ];

    setTimeout(() => {
      // @ts-ignore
      this.dtTrigger.next();
    }, 1000);

    this.id=this.activatedRoute.parent?.snapshot.params['id'];
    this.activatedRoute.firstChild!.params.subscribe(res=>{
      this.data=this.dataTotal.filter(s=>s.shomareDarkhast===+res['id']);
    });
    this.search(null!);

  } // end ngOnInit

  search(e:Event){
    // @ts-ignore
    if(e!=null) {
      this.newData=[];
      for (var i in this.data) {
        // @ts-ignore
        if (this.data[i].shahr.match(e.target.value.toString()) || this.data[i].shomareDarkhast==+e.target.value) {
          // @ts-ignore
          this.newData.push(this.data[i]);
        }
      }
    }else {
      this.newData=this.data;
    }
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }


}
