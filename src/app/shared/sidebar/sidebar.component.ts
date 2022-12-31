import {Component, OnInit} from '@angular/core';
import {SidebarService} from "./shared/services/sidebar.service";
import {SidebarInterFace} from "./shared/interFaces/sidebarInterFace";


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
      this.sidbarData=res;
    })
  }

}
