import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-etelaat-amary',
  templateUrl: './etelaat-amary.component.html',
  styleUrls: ['./etelaat-amary.component.css']
})
export class EtelaatAmaryComponent {

  changeTime:string='روز گذشته';


  constructor() {
  }

  changeTimeItem(e:any){
  this.changeTime=e.target.value;
  }


}
