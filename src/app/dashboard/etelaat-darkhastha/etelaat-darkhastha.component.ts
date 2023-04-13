import {Component, OnDestroy, OnInit, ChangeDetectorRef, ViewChild, AfterViewInit, Renderer2} from '@angular/core';
import {IetelaatDarKhastha} from "../shared/interFace/IetelaatDarKhastha";
import {IchildIEtelaatDarKhastha} from "../shared/interFace/IchildIEtelaatDarKhastha";
import {Subject} from "rxjs";
import {LanguageApp} from "../shared/class/LanguageApp";
import {DataTableDirective} from "angular-datatables";
import {SortEvent} from "primeng/api";
import {Table} from "primeng/table";


@Component({
  selector: 'app-etelaat-darkhastha',
  templateUrl: './etelaat-darkhastha.component.html',
  styleUrls: ['./etelaat-darkhastha.component.css']
})
export class EtelaatDarkhasthaComponent implements OnInit, OnDestroy, AfterViewInit {
  //dtOptions: DataTables.Settings = {};
  dtOptions: any = {};
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();


  @ViewChild(DataTableDirective)
  private datatableElement!: DataTableDirective;


  data: IetelaatDarKhastha[] = [];
  itemChild: IchildIEtelaatDarKhastha[] = [];
  showChildRow: boolean[] = [];
  isData: boolean = false;
  id: number = 0;
  countRow: number = 1;


  cols: any[] | undefined;
  colsChild: any[] | undefined;
  filterModes = [
    { label: 'Lenient', value: 'lenient' },
    { label: 'Strict', value: 'strict' }
  ];
  filterMode = 'lenient';


  constructor(private _renderer: Renderer2) {
  }

  ngOnInit(): void {

    this.data = [
      {
        id: 1, noeDarKhast: 'بررسی صورتحساب', tedadAkhzShode: 48, tedadKol: 16,
        child: [
          {tedadAkhzShode: 13, tedadKol: 35, marhaleDarkhast: 'بررسی مسئول تشخیص', radif: 3},
          {tedadAkhzShode: 3, tedadKol: 13, marhaleDarkhast: 'بررسی اولیه درخواست کننده', radif: 3}
        ]
      },
      {
        id: 2, noeDarKhast: 'تعویض کنتور', tedadAkhzShode: 0, tedadKol: 18,
        child: [
          {tedadAkhzShode: 0, tedadKol: 8, marhaleDarkhast: 'بررسی و محاسبه تعویض کنتور', radif: 4},
          {tedadAkhzShode: 0, tedadKol: 2, marhaleDarkhast: 'انجام تعویض کنتور', radif: 3},
          {tedadAkhzShode: 0, tedadKol: 5, marhaleDarkhast: 'بررسی مسئول تشخیص', radif: 2},
          {tedadAkhzShode: 0, tedadKol: 3, marhaleDarkhast: 'بررسی اولیه درخواست کننده', radif: 1}
        ]
      },
      {
        id: 3, noeDarKhast: 'تغییر اطلاعات تعرفه', tedadAkhzShode: 4, tedadKol: 0,
        child: [
          {tedadAkhzShode: 0, tedadKol: 2, marhaleDarkhast: 'بررسی توسط کارشناس', radif: 2},
          {tedadAkhzShode: 0, tedadKol: 2, marhaleDarkhast: 'بررسی اولیه درخواست کننده', radif: 1}
        ]
      },
    ];

    this.cols = [
      { field: 'noeDarKhast', header: 'نوع درخواست' },
      { field: 'tedadKol', header: 'تعداد کل' },
      { field: 'tedadAkhzShode', header: 'تعداد اخذ شده' },
      { field: '', header: 'مشاهده' },
      { field: '', header: 'تفکیک مراحل' },
    ];



    this.colsChild = [
      { field: 'marhaleDarkhast', header: 'نوع درخواست' },
      { field: 'tedadKol', header: 'تعداد کل' },
      { field: 'tedadAkhzShode', header: 'تعداد اخذ شده' },
      { field: 'radif', header: 'ردیف' },
      { field: '', header: 'تفکیک مراحل' },
    ];


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: true,
      language: LanguageApp.persian_datatables

    };
    //data: this.data
    // ,

    //   columns: [{
    //     title: 'نوع درخواست',
    //     data: 'noeDarKhast'
    //   }, {
    //     title: 'تعداد کل',
    //     data: 'tedadKol'
    //   }, {
    //     title: 'تعداد اخذ شده',
    //     data: 'tedadAkhzShode'
    //   }, {
    //     title: 'مشاهده',
    //     orderable: false,
    //     data: null,
    //     defaultContent: 'MM'
    //   }
    //     , {
    //       title: 'تفکیک مراحل',
    //       className: 'details-control',
    //       orderable: false,
    //       data: null,
    //       defaultContent: 'details'
    //     }
    //   ]

    setTimeout(() => {
      // @ts-ignore
      this.dtTrigger.next();
    }, 1000);

  } // end ngOnInit




  showChild(id: number, item: any) {
    //this.showChildRow[id] = !this.showChildRow[id];
    //this.id = id;
    this.itemChild = item;
    this.isData = true;
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  clear(table: Table) {
    table.clear();
  }

  ngAfterViewInit() {
    const self = this
    this.datatableElement.dtInstance.then(table => {
      // Add event listener for opening and closing details
      $('table tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
        } else {
          // Open this row
          row.child(self.format(row.data())).show();
          tr.addClass('shown');
        }
      });
    })
  }

  expandRow(trRef: any, rowData: any) {
    const self = this
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      var row = dtInstance.row(trRef);
      if (row.child.isShown()) {
        row.child.hide();
        this._renderer.removeClass(trRef, 'shown');
      } else {
        const childTable = this.getTable(rowData);
        row.child(childTable).show();
      }
    })
  }

  getTable(d: any) {
    console.log('d=>', d[0].marhaleDarkhast);


    return `<table  datatable class="table table-striped">
                          <thead>
                            <tr>
                               <td>مرحله درخواست</td>
                               <td>تعداد کل</td>
                               <td>تعداد اخذ شده</td>
                               <td>مشاهده</td>
                            </tr>
                          </thead>
                          <tbody>





                             <tr>
                              <td>${d.marhaleDarkhast}</td>
                              <td>${d.tedadKol}</td>
                              <td>${d.tedadAkhzShode}</td>
                              <td>${d.marhaleDarkhast}</td>
                             </tr>

                          </tbody>
                        </table>`
  }

  format(d: any) {
    console.log('d=>', d.child[0].marhaleDarkhast);
    // `d` is the original data object for the row
    return `<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">
        <tr>
            <td>مرحله درخواست</td>
            <td>تعداد کل</td>
             <td>تعداد اخذ شده</td>
              <td>مشاهده</td>
        </tr>
        <ng-container *ngFor="let row of d.child;let i = index">
                    <tr #rowInstance>
                        <td>{{row.marhaleDarkhast}}</td>
                        <td>{{row.tedadKol}}</td>
                        <td>{{row.tedadAkhzShode}}</td>
                        <td>{{row.marhaleDarkhast}}</td>
                    </tr>
                </ng-container>

    </table>`;
  }

}
