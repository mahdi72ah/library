import {Component, OnInit} from '@angular/core';
import {SidebarService} from "./shared/services/sidebar.service";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  constructor(private sidebarService:SidebarService) {
  }

  ngOnInit(): void {
    this.sidebarService.getAllMenuItem().subscribe(res=>{
      console.log('Vahid =>',res);
    })
  }

}
