import {Component, OnInit} from '@angular/core';
import {IaccountingDTOs} from "../shared/interfaces/IaccountingDTOs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  account:IaccountingDTOs[]=[
    {id:123,parentId:0,title:'حساب معین یک',status:true,child:[
        {id:1,title:'تفصیلی یک',parentId:123,status:true,child:[
            {id:2,title:'بانک ملی',parentId:1,status:true,child:[]},
            {id:3,title:'بانک سپه',parentId:1,status:true,child:[]},
            {id:4,title:'بانک ملت',parentId:1,status:true,child:[]},
            {id:5,title:'بانک صادرات',parentId:1,status:true,child:[]}
          ]},
        {id:6,title:'تفصیلی دو',parentId:123,status:true,child:[
            {id:8,title:'انبار یک',parentId:6,status:true,child:[]},
            {id:9,title:'انبار دو',parentId:6,status:true,child:[]},
            {id:10,title:'انبار سه',parentId:6,status:true,child:[]},
            {id:11,title:'انبار چهار',parentId:6,status:true,child:[]}
          ]},
        {id:7,title:'تفصیلی سه',parentId:123,status:true,child:[
            {id:12,title:'حساب یک',parentId:7,status:true,child:[]},
            {id:13,title:'حساب دو',parentId:7,status:true,child:[]},
            {id:14,title:'حساب سه',parentId:7,status:true,child:[]},
            {id:15,title:'حساب چهار',parentId:7,status:true,child:[]}
          ]}
      ]},
    {id:456,parentId:0,title:'حساب معین دو',status:false,child:[
        {id:16,title:'تفصیلی یک',parentId:456,status:true,child:[
            {id:17,title:'بانک ملی',parentId:16,status:true,child:[]},
            {id:18,title:'بانک سپه',parentId:16,status:true,child:[]},
            {id:19,title:'بانک ملت',parentId:16,status:true,child:[]},
            {id:20,title:'بانک صادرات',parentId:16,status:true,child:[]}
          ]},
        {id:21,title:'تفصیلی دو',parentId:456,status:true,child:[
            {id:22,title:'انبار یک',parentId:21,status:true,child:[]},
            {id:23,title:'انبار دو',parentId:21,status:true,child:[]},
            {id:24,title:'انبار سه',parentId:21,status:true,child:[]},
            {id:25,title:'انبار چهار',parentId:21,status:true,child:[]}
          ]},
        {id:26,title:'تفصیلی سه',parentId:456,status:true,child:[
            {id:12,title:'حساب یک',parentId:26,status:true,child:[]},
            {id:13,title:'حساب دو',parentId:26,status:true,child:[]},
            {id:14,title:'حساب سه',parentId:26,status:true,child:[]},
            {id:15,title:'حساب چهار',parentId:26,status:true,child:[]}
          ]}
      ]},
    {id:789,parentId:0,title:'حساب معین سه',status:true,child:[
        {id:27,title:'تفصیلی یک',parentId:789,status:true,child:[
            {id:28,title:'بانک ملی',parentId:27,status:true,child:[]},
            {id:29,title:'بانک سپه',parentId:27,status:true,child:[]},
            {id:30,title:'بانک ملت',parentId:27,status:true,child:[]},
            {id:31,title:'بانک صادرات',parentId:27,status:true,child:[]}
          ]},
        {id:41,title:'تفصیلی دو',parentId:789,status:true,child:[
            {id:32,title:'انبار یک',parentId:41,status:true,child:[]},
            {id:33,title:'انبار دو',parentId:41,status:true,child:[]},
            {id:34,title:'انبار سه',parentId:41,status:true,child:[]},
            {id:35,title:'انبار چهار',parentId:41,status:true,child:[]}
          ]},
        {id:36,title:'تفصیلی سه',parentId:789,status:true,child:[
            {id:37,title:'حساب یک',parentId:36,status:true,child:[]},
            {id:38,title:'حساب دو',parentId:36,status:true,child:[]},
            {id:39,title:'حساب سه',parentId:36,status:true,child:[]},
            {id:40,title:'حساب چهار',parentId:36,status:true,child:[]}
          ]}
      ]},
  ];
  childAccount:IaccountingDTOs[]=[];
  codeAccount:IaccountingDTOs[]=[];


  constructor() {
  }
  ngOnInit(): void {
  }



  parentAccounting(e:Event){
    console.log('Mika => ',e);

    this.childAccount=[];
    for (var i in this.account) {
      // @ts-ignore
      if (this.account[i].id===+e) {
        // @ts-ignore
        for(var p in this.account[i].child){
          // @ts-ignore
          if (this.account[i].child[p].parentId===+e) {
            // @ts-ignore
            this.childAccount.push(this.account[i].child[p]);
          }
        }
      }
    }

    console.log('this.childAccount =>',this.childAccount);
  }




  childAccounting(e:Event){
    //inja kar kon
    console.log('MikaChildVahid => ',e);
    //debugger;
    this.codeAccount=[];
    for (var i in this.account) {
      // @ts-ignore
      if (1==1) {
        // @ts-ignore
        for(var p in this.account[i].child){
          // @ts-ignore
          if(this.account[i].child[p].id===+e){
            // @ts-ignore
            for(var s in this.account[i].child[p].child){
              // @ts-ignore
              console.log('vahid =>',this.account[i].child[p].child[s]);
              // @ts-ignore
              if (this.account[i].child[p].child[s].parentId===+e) {
                // @ts-ignore
                this.codeAccount.push(this.account[i].child[p].child[s]);
              }
            }
          }

        }
      }
    }

    console.log('this.codeAccount =>',this.codeAccount);
  }



  codeAccounting(e:Event){
    debugger;
    console.log('MikaChild => ',e);

    this.codeAccount=[];
    for (var i in this.account) {
      // @ts-ignore
      if (this.account[i].id===+e) {
        // @ts-ignore
        for(var p in this.account[i].child){
          // @ts-ignore
          if (this.account[i].child[i].child[p].parentId===+e) {
            // @ts-ignore
            this.codeAccount.push(this.account[i].child[i].child[p]);
          }
        }
      }
    }

    console.log('this.VahidAccount =>',this.childAccount);
  }

}
