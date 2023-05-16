import {
  AfterContentChecked, AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ActivationStart, Data,
  NavigationEnd,
  Router,
  RoutesRecognized
} from "@angular/router";
import {IlistDarkhasthaieFaal} from "../shared/interFace/IlistDarkhasthaieFaal";
import {empty, filter, map, Subject, Subscription} from "rxjs";
import {LanguageApp} from "../../dashboard/shared/class/LanguageApp";
import {ImoshahedeSabeghe} from "../../etelaat-taghaza/shared/interFace/ImoshahedeSabeghe";
import {IroidadHa} from "../shared/interFace/IroidadHa";

@Component({
  selector: 'app-list-darkhasthaie-faal',
  templateUrl: './list-darkhasthaie-faal.component.html',
  styleUrls: ['./list-darkhasthaie-faal.component.css']
})
export class ListDarkhasthaieFaalComponent implements OnInit, OnDestroy{


  dataTotal: IlistDarkhasthaieFaal[] = [];
  data: IlistDarkhasthaieFaal[] = [];
  newData: IlistDarkhasthaieFaal[] = [];
  dataMoshahedeSabeghe: ImoshahedeSabeghe[] = [];
  roidadHa: IroidadHa[] = [];
  dtOptions: DataTables.Settings = {};
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  subs: Array<Subscription> = [];

  id: string = '';
  status:any;
  private statusSub:any;

  constructor(private activatedRoute: ActivatedRoute,private router: Router) {
  }

  ngOnInit(): void {

    // @ts-ignore
    this.statusSub=this.activatedRoute.data.subscribe(
      (data:Data)=>{
        this.status=data['status']
      }
    )

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: true,
      language: LanguageApp.persian_datatables
    };

    this.roidadHa = [
      {
      name: 'تعاونی خاتم الانبیاء - پیمانکار فرهادگرد',
      tozihat: 'ارجاع دادن درخواست به مرحله بعد',
      date: '1402/01/28-11:11:00'
    },{
      name: 'تعاونی خاتم الانبیاء - پیمانکار فرهادگرد', tozihat: 'اخذ کردن درخواست', date: '1402/02/28-11:11:00'
    },{
        name: 'تعاونی خاتم الانبیاء - پیمانکار فرهادگرد', tozihat: 'مشاهده درخواست', date: '1402/03/28-11:11:00'
      }
    ]

    this.dataMoshahedeSabeghe = [
      {
        tarikhEtmam: '',
        tarikhIjad: '1402/01/28-11:14:48',
        akhzKonande: '',
        marhale: 'تایید کارشناس',
        paraf: '',
        status: 'در دست اقدام'
      },
      {
        tarikhEtmam: '1402/01/28-11:14:48',
        tarikhIjad: '1402/01/28-11:14:15',
        akhzKonande: 'تعاونی خاتم الانبیاء - پیمانکار فرهادگرد',
        marhale: 'بررسی اولیه درخواست کننده',
        paraf: '55132404214',
        status: 'تمام شده'
      }
    ];

    this.dataTotal = [
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 1,
        shahr: 'فرهادگرد',
        noeDarkhast: 'بررسی صورتحساب',
        marhale: 'بررسی مسئول تشخیص',
        ijadKonande: 'معصومه سخاوتی',
        erjaDahande: 'معصومه سخاوتی',
        tarikhErja: '1401/12/29-17:32:16',
        khande: 'شده',
        akhzKonande: 'معصومه سخاوتی',
        tozihat: 'مسیر:600104- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:ابراهیم چوبداری- اشتراک:601214'
      },
      {
        shomareDarkhast: 2,
        shahr: 'بخش مرکزی فریمان',
        noeDarkhast: 'تعویض کنتور',
        marhale: 'بررسی اولیه درخواست کننده',
        ijadKonande: 'زهره صادق شریف',
        erjaDahande: 'زهره صادق شریف',
        tarikhErja: '1401/12/24-11:06:09',
        khande: 'نشده',
        akhzKonande: '',
        tozihat: 'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'
      },
      {
        shomareDarkhast: 2,
        shahr: 'بخش مرکزی فریمان',
        noeDarkhast: 'تعویض کنتور',
        marhale: 'بررسی اولیه درخواست کننده',
        ijadKonande: 'زهره صادق شریف',
        erjaDahande: 'زهره صادق شریف',
        tarikhErja: '1401/12/24-11:06:09',
        khande: 'نشده',
        akhzKonande: '',
        tozihat: 'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'
      },
      {
        shomareDarkhast: 2,
        shahr: 'بخش مرکزی فریمان',
        noeDarkhast: 'تعویض کنتور',
        marhale: 'بررسی اولیه درخواست کننده',
        ijadKonande: 'زهره صادق شریف',
        erjaDahande: 'زهره صادق شریف',
        tarikhErja: '1401/12/24-11:06:09',
        khande: 'نشده',
        akhzKonande: '',
        tozihat: 'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'
      },
      {
        shomareDarkhast: 2,
        shahr: 'بخش مرکزی فریمان',
        noeDarkhast: 'تعویض کنتور',
        marhale: 'بررسی اولیه درخواست کننده',
        ijadKonande: 'زهره صادق شریف',
        erjaDahande: 'زهره صادق شریف',
        tarikhErja: '1401/12/24-11:06:09',
        khande: 'نشده',
        akhzKonande: '',
        tozihat: 'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'
      },
      {
        shomareDarkhast: 3,
        shahr: 'فرهادگرد',
        noeDarkhast: 'تغییر اطلاعات تعرفه',
        marhale: 'بررسی اولیه درخواست کننده',
        ijadKonande: 'محمد ظفرزاده',
        erjaDahande: 'محمد ظفرزاده کونی',
        tarikhErja: '1401/12/24-11:06:09',
        khande: 'نشده',
        akhzKonande: '',
        tozihat: 'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'
      },
      {
        shomareDarkhast: 3,
        shahr: 'فرهادگرد',
        noeDarkhast: 'تغییر اطلاعات تعرفه',
        marhale: 'بررسی اولیه درخواست کننده',
        ijadKonande: 'محمد ظفرزاده',
        erjaDahande: 'محمد ظفرزاده',
        tarikhErja: '1401/12/24-11:06:09',
        khande: 'نشده',
        akhzKonande: '',
        tozihat: 'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'
      },
      {
        shomareDarkhast: 3,
        shahr: 'فرهادگرد',
        noeDarkhast: 'تغییر اطلاعات تعرفه',
        marhale: 'بررسی اولیه درخواست کننده',
        ijadKonande: 'محمد ظفرزاده',
        erjaDahande: 'محمد ظفرزاده',
        tarikhErja: '1401/12/24-11:06:09',
        khande: 'نشده',
        akhzKonande: '',
        tozihat: 'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'
      },
      {
        shomareDarkhast: 3,
        shahr: 'فرهادگرد',
        noeDarkhast: 'تغییر اطلاعات تعرفه',
        marhale: 'بررسی اولیه درخواست کننده',
        ijadKonande: 'محمد ظفرزاده',
        erjaDahande: 'محمد ظفرزاده',
        tarikhErja: '1401/12/24-11:06:09',
        khande: 'نشده',
        akhzKonande: '',
        tozihat: 'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'
      },
      {
        shomareDarkhast: 3,
        shahr: 'فرهادگرد',
        noeDarkhast: 'تغییر اطلاعات تعرفه',
        marhale: 'بررسی اولیه درخواست کننده',
        ijadKonande: 'محمد ظفرزاده',
        erjaDahande: 'محمد ظفرزاده',
        tarikhErja: '1401/12/24-11:06:09',
        khande: 'نشده',
        akhzKonande: '',
        tozihat: 'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'
      },
      {
        shomareDarkhast: 3,
        shahr: 'فرهادگرد',
        noeDarkhast: 'تغییر اطلاعات تعرفه',
        marhale: 'بررسی اولیه درخواست کننده',
        ijadKonande: 'محمد ظفرزاده',
        erjaDahande: 'محمد ظفرزاده',
        tarikhErja: '1401/12/24-11:06:09',
        khande: 'نشده',
        akhzKonande: '',
        tozihat: 'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'
      },
      {
        shomareDarkhast: 3,
        shahr: 'فرهادگرد',
        noeDarkhast: 'تغییر اطلاعات تعرفه',
        marhale: 'بررسی اولیه درخواست کننده',
        ijadKonande: 'محمد ظفرزاده',
        erjaDahande: 'محمد ظفرزاده',
        tarikhErja: '1401/12/24-11:06:09',
        khande: 'نشده',
        akhzKonande: '',
        tozihat: 'روستا:آبادی میاندهی- دلیل اعتراض:تخفیف ترکیدگی- درخواست کننده:فاطمه امیری- اشتراک:1407110083'
      },
    ];

    setTimeout(() => {
      // @ts-ignore
      this.dtTrigger.next();
    }, 1000);

    this.id = this.activatedRoute.snapshot.params['id'];

    if(this.id){
      this.data = this.dataTotal.filter(s => s.shomareDarkhast === +this.id);
    }else {
      this.data = this.dataTotal;
    }

    this.search(null!);

  } // end ngOnInit

  search(e: Event) {
    // @ts-ignore
    if (e != null) {
      this.newData = [];
      for (var i in this.data) {
        // @ts-ignore
        if (this.data[i].shahr.match(e.target.value.toString()) || this.data[i].shomareDarkhast == +e.target.value) {
          // @ts-ignore
          this.newData.push(this.data[i]);
        }
      }
    } else {
      this.newData = this.data;
    }
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
    this.statusSub.unsubscribe();
  }
}
