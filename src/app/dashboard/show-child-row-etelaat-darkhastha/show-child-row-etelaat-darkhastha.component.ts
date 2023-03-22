import {Component, Input, OnInit} from '@angular/core';
import {IetelaatDarKhastha} from "../shared/interFace/IetelaatDarKhastha";
import {IchildIEtelaatDarKhastha} from "../shared/interFace/IchildIEtelaatDarKhastha";

@Component({
  selector: 'app-show-child-row-etelaat-darkhastha',
  templateUrl: './show-child-row-etelaat-darkhastha.component.html',
  styleUrls: ['./show-child-row-etelaat-darkhastha.component.css']
})
export class ShowChildRowEtelaatDarkhasthaComponent implements OnInit {

  @Input() Data:IchildIEtelaatDarKhastha[]=[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
