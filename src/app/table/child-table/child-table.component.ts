import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IaccountingDTOs} from "../shared/interfaces/IaccountingDTOs";

@Component({
  selector: 'app-child-table',
  templateUrl: './child-table.component.html',
  styleUrls: ['./child-table.component.css']
})
export class ChildTableComponent implements OnInit{

  status: boolean = false;
  result:IaccountingDTOs[]=[];
  titleParent:string='';
  idParent:number=0;

  @Input() accounting: IaccountingDTOs[] | undefined;
  @Input() childAccounting: IaccountingDTOs[] | undefined;
  @Output() toParentAccounting: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {

  }

  addClass(id:any,e:Event){
    this.result=[];
    // @ts-ignore
    var x = e.target.value;
    console.log('elementVal =>',x);




    for (var i in this.accounting) {
      // @ts-ignore
      if (this.accounting[i].title.match(x) || this.accounting[i].id.toString().match(x)) {
        // @ts-ignore
        this.result.push(this.accounting[i]);
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
      this.toParentAccounting.emit(this.idParent);
  }


}
