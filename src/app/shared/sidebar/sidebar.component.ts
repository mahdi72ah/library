import {Component, OnInit} from '@angular/core';
import {SidebarService} from "./shared/services/sidebar.service";
import {SidebarInterFace} from "./shared/interFaces/sidebarInterFace";
import {log} from "util";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  sidbarData:SidebarInterFace[]=[];

  constructor(private sidebarService:SidebarService) {
  }

  ngOnInit(): void {
    this.sidebarService.getAllMenuItem().subscribe(res=>{
      console.log('Vahid =>',res);
      //res.map(p=>p.icon?p.icon.replace('"',''):'');
      res.map(p=>p.icon?console.log('vdtype',typeof (p.icon)):'');
      this.sidbarData=res;
      console.log('VahidIcon',res)
    })
  }

  buffer(svg:any){
    const buff = new Buffer(svg);
    const base64data = buff.toString('base64');
    return base64data;
  }


}
