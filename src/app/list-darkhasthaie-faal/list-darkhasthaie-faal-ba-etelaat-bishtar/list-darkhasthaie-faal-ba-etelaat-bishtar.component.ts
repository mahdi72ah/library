import {Component, OnDestroy, OnInit} from '@angular/core';
import {LanguageApp} from "../../dashboard/shared/class/LanguageApp";
import {Subject} from "rxjs";

@Component({
  selector: 'app-list-darkhasthaie-faal-ba-etelaat-bishtar',
  templateUrl: './list-darkhasthaie-faal-ba-etelaat-bishtar.component.html',
  styleUrls: ['./list-darkhasthaie-faal-ba-etelaat-bishtar.component.css']
})
export class ListDarkhasthaieFaalBaEtelaatBishtarComponent implements OnInit, OnDestroy {
  countries: any[] | undefined;
  dtOptions: DataTables.Settings = {};
  selectedCountry: string | undefined;
  dtTrigger: Subject<any> = new Subject<any>();
  newData:any;

  ngOnInit() {
    this.countries = [
      { name: 'آزمایش کنتور- مرحله اطلاعات تصحیح قرارداد">آزمایش کنتور- مرحله تکمیل مدارک', code: 'AU' },
      { name: 'آزمایش کنتور- مرحله محاسبه تصحیح قرارداد', code: '1' },
      { name: 'آزمایش کنتور- مرحله مشاهده صورتحساب', code: '2' },
      { name: 'اشتباه در تعویض کنتور- مرحله بازرسی از انشعاب', code: '3' },
      { name: 'اشتباه در تعویض کنتور- مرحله بررسی توسط کارشناس', code: '4' },
      { name: 'اشتباه در فروش فاضلاب- مرحله بازرسی از ملک', code: '5' },
      { name: 'اشتباه در فروش فاضلاب- مرحله بررسی کارشناس', code: '6' },
      { name: 'اشتباه در فروش فاضلاب- مرحله بررسی مسئول مشترکین', code: '7' },
      { name: 'اشتباه در نصب آب- مرحله بازرسی از انشعاب', code: '8' },
      { name: 'اشتباه در نصب آب- مرحله بررسی توسط کارشناس', code: '9' },
      { name: 'اشتباه در نصب آب- مرحله بررسی مسئول مشترکین', code: '10' },
      { name: 'اشتباه در نصب سیفون- مرحله بازرسی از انشعاب', code: '11' },
      { name: 'اشتباه در نصب سیفون- مرحله بررسی توسط کارشناس', code: '12' },
      { name: 'اشتباه در نصب سیفون- مرحله بررسی مسئول مشترکین', code: '13' },
      { name: 'اشتباه در نصب فاضلاب اشتراک- مرحله بازرسی از ملک', code: '14' },
      { name: 'اشتباه در نصب فاضلاب اشتراک- مرحله بررسی توسط کارشناس', code: '15' },
      { name: 'اشتباه در نصب فاضلاب اشتراک- مرحله بررسی مسئول مشترکین', code: '16' },
      { name: 'بازسازی انشعاب- مرحله انجام عملیات و محاسبه نهایی', code: '17' },
      { name: 'بازسازی انشعاب- مرحله تایید کارشناس', code: '18' },
      { name: 'بازسازی انشعاب- مرحله محاسبه اولیه و تایید مشترکین', code: '19' },
      { name: 'بررسی صورتحساب- مرحله اطلاعات تصحیح قرارداد', code: '20' },
      { name: 'بررسی صورتحساب- مرحله بارگزاری مجوز حفاری', code: '21' },
      { name: 'بررسی صورتحساب- مرحله بررسی ارزیاب ملک مشترکین', code: '22' },
      { name: 'بررسی صورتحساب- مرحله بررسی شبکه', code: '23' },
      { name: 'بررسی صورتحساب- مرحله بررسی قاری', code: '24' },
      { name: 'بررسی صورتحساب- مرحله بررسی مسئول تشخیص', code: '25' },
      { name: 'بررسی صورتحساب- مرحله بررسی نهایی تغییر کاربری', code: '26' },
      { name: 'بررسی صورتحساب- مرحله تکمیل مدارک', code: '27' },
      { name: 'بررسی صورتحساب- مرحله محاسبه تصحیح قرارداد', code: '28' },
      { name: 'بررسی صورتحساب- مرحله مشاهده صورتحساب تصحیح قرارداد', code: '29' },
      { name: 'برگشت ودیعه ساخت و ساز- مرحله بررسی اولیه', code: '30' },
      { name: 'پاسخ به استعلام- مرحله اطلاعات تصحیح قرارداد', code: '31' }
    ];
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: true,
      language: LanguageApp.persian_datatables
    };
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
