import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IlistDarkhasthaieFaal} from "../shared/interFace/IlistDarkhasthaieFaal";
import {ImoshahedeSabeghe} from "../../etelaat-taghaza/shared/interFace/ImoshahedeSabeghe";
import {IroidadHa} from "../shared/interFace/IroidadHa";
import {Subject, Subscription} from "rxjs";
import {ActivatedRoute, Data, Router} from "@angular/router";
import {LanguageApp} from "../../dashboard/shared/class/LanguageApp";
import {NgbModal,ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import {TreeNode} from "primeng/api";
import {NodeService} from "../shared/services/node.service";


@Component({
  selector: 'app-for-search',
  templateUrl: './for-search.component.html',
  styleUrls: ['./for-search.component.css']
})
export class ForSearchComponent implements OnInit, OnDestroy, AfterViewInit{
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
  @ViewChild('mymodal') mymodal: ElementRef | undefined;
  dtTrigger: Subject<any> = new Subject<any>();
  dataTotal: IlistDarkhasthaieFaal[] = [];
  data: IlistDarkhasthaieFaal[] = [];
  newData: IlistDarkhasthaieFaal[] = [];
  dataMoshahedeSabeghe: ImoshahedeSabeghe[] = [];
  roidadHa: IroidadHa[] = [];
  dtOptions: DataTables.Settings = {};
  subs: Array<Subscription> = [];
  title = 'appBootstrap';
  files: TreeNode[] | undefined;
  selectedFiles: TreeNode[] | undefined;

  closeResult: string='';
  id: string = '';
  status:any;
  showModal:boolean=true;
  private statusSub:any;

  constructor(private activatedRoute: ActivatedRoute,private router: Router,private modalService: NgbModal,private nodeService: NodeService) {
  }

  ngAfterViewInit(): void {
    this.open(this.mymodal);
  }


  ngOnInit(): void {

    this.nodeService.getFiles().then((data) => (this.files = data));
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

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }

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

  close(){
  this.showModal=false;
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
    this.statusSub.unsubscribe();
  }
}
