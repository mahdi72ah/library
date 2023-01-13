import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IaccountingDTOs} from "../shared/interfaces/IaccountingDTOs";

@Component({
  selector: 'app-tafsil-table',
  templateUrl: './tafsil-table.component.html',
  styleUrls: ['./tafsil-table.component.css']
})
export class TafsilTableComponent implements OnInit{
  status: boolean = false;
  result:IaccountingDTOs[]=[];
  titleParent:string='';
  idParent:number=0;

  @Input() childAccounting: IaccountingDTOs[] | undefined;
  @Output() toChildAccounting: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }


  addClass(id:any,e:Event){
    this.result=[];
    // @ts-ignore
    var x = e.target.value;
    console.log('elementVal =>',x);




    for (var i in this.childAccounting) {
      // @ts-ignore
      if (this.childAccounting[i].title.match(x) || this.childAccounting[i].id.toString().match(x)) {
        // @ts-ignore
        this.result.push(this.childAccounting[i]);
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
      this.toChildAccounting.emit(this.idParent);
  }


}
