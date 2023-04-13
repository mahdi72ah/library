import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ChangeDetectorRef,
  DoCheck, ViewChildren, QueryList, ViewChild
} from '@angular/core';
import {IchildIEtelaatDarKhastha} from "../shared/interFace/IchildIEtelaatDarKhastha";
import {LanguageApp} from "../shared/class/LanguageApp";
import {Subject} from "rxjs";
import {DataTableDirective} from "angular-datatables";


@Component({
  selector: 'app-show-child-row-etelaat-darkhastha',
  templateUrl: './show-child-row-etelaat-darkhastha.component.html',
  styleUrls: ['./show-child-row-etelaat-darkhastha.component.css']
})
export class ShowChildRowEtelaatDarkhasthaComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit {

  dtOptions: any = {};
  //dtOptions: DataTables.Settings = {};
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  @Input() Data: IchildIEtelaatDarKhastha[] = [];
  @Input() isData: boolean = true;

  newData: IchildIEtelaatDarKhastha[] = [];
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective | undefined;


  constructor() {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // @ts-ignore
      this.dtTrigger.next(this.dtOptions);
    }, 200);
  }

  // Call this method to reaload the data
  rerender(): void {
    this.newData = [];
    this.newData = this.Data;
    // @ts-ignore
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      setTimeout(() => {
        // @ts-ignore
        this.dtTrigger.next();
      }, 1)
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.newData = [];
    this.newData = this.Data;
    console.log('rrrrrrr=>', this.newData);
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      searching:false,
      pageLength: 10,
      ordering: false,
      language: LanguageApp.persian_datatables
    };

  } // end ngOnInit

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }


  ngDoCheck(): void {
    this.newData = [];
    this.newData = this.Data;


    console.log('ngDoCheck=>', this.newData);
  }

}
