import {Component, OnInit} from '@angular/core';
import {IetelaatDarKhastha} from "../shared/interFace/IetelaatDarKhastha";
import {IchildIEtelaatDarKhastha} from "../shared/interFace/IchildIEtelaatDarKhastha";

@Component({
  selector: 'app-etelaat-darkhastha',
  templateUrl: './etelaat-darkhastha.component.html',
  styleUrls: ['./etelaat-darkhastha.component.css']
})
export class EtelaatDarkhasthaComponent implements OnInit{

  data:IetelaatDarKhastha[]=[];
  itemChild:IchildIEtelaatDarKhastha[]=[];
  showChildRow:boolean[]=[];
  id:number=0;
  countRow:number=1;

  constructor() {
  }

  ngOnInit(): void {
    this.data=[
      {id:1,noeDarKhast:'بررسی صورتحساب',tedadAkhzShode:48,tedadKol:16,
        child:[
          {tedadAkhzShode:13,tedadKol:35,marhaleDarkhast:'بررسی مسئول تشخیص',radif:3},
          {tedadAkhzShode:3,tedadKol:13,marhaleDarkhast:'بررسی اولیه درخواست کننده',radif:3}
        ]},
      {id:2,noeDarKhast:'تعویض کنتور',tedadAkhzShode:0,tedadKol:18,
        child:[
          {tedadAkhzShode:0,tedadKol:8,marhaleDarkhast:'بررسی و محاسبه تعویض کنتور',radif:4},
          {tedadAkhzShode:0,tedadKol:2,marhaleDarkhast:'انجام تعویض کنتور',radif:3},
          {tedadAkhzShode:0,tedadKol:5,marhaleDarkhast:'بررسی مسئول تشخیص',radif:2},
          {tedadAkhzShode:0,tedadKol:3,marhaleDarkhast:'بررسی اولیه درخواست کننده',radif:1}
        ]},
      {id:3,noeDarKhast:'تغییر اطلاعات تعرفه',tedadAkhzShode:4,tedadKol:0,
        child:[
          {tedadAkhzShode:0,tedadKol:2,marhaleDarkhast:'بررسی توسط کارشناس',radif:2},
          {tedadAkhzShode:0,tedadKol:2,marhaleDarkhast:'بررسی اولیه درخواست کننده',radif:1}
        ]},
    ]

  } // end ngOnInit

  showChild(id:number,item:any){
    this.showChildRow[id]=!this.showChildRow[id];
    this.id=id;
    this.itemChild=item;
  }

}
