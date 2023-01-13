import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IaccountingDTOs} from "../shared/interfaces/IaccountingDTOs";
import {log} from "util";

@Component({
  selector: 'app-code-table',
  templateUrl: './code-table.component.html',
  styleUrls: ['./code-table.component.css']
})
export class CodeTableComponent implements OnInit{
  status: boolean = false;
  result:IaccountingDTOs[]=[];
  titleParent:string='';
  idParent:number=0;

  @Input() codeAccounting: IaccountingDTOs[] | undefined;
  @Output() toCodeAccounting: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  addClass(id:any,e:Event){
    this.result=[];
    // @ts-ignore
    var x = e.target.value;
    console.log('elementValCode =>',x);


    console.log('are =>',this.codeAccounting);

    if(x!=''){
      for (var i in this.codeAccounting) {
        // @ts-ignore
        if (this.codeAccounting[i].title.match(x) || this.codeAccounting[i].id.toString().match(x)) {
          // @ts-ignore
          this.result.push(this.codeAccounting[i]);
        }
      }
    }


    console.log('result =>',this.result);


    if(x!=''){
      // @ts-ignore
      this.status = true;
    }else {
      // @ts-ignore
      this.status = false;
    }
  }


  selectedRow(data:any){
    this.idParent=data.id;
    this.titleParent=data.title;
    if(this.titleParent!=''){
      this.status=false;
    }
    if (this.idParent > 0)
      this.toCodeAccounting.emit(this.idParent);
  }



}
