import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-shared-slider-component',
  templateUrl: './shared-slider-component.component.html',
  styleUrls: ['./shared-slider-component.component.css']
})
export class SharedSliderComponentComponent {
 @Input() images:any[] = [];
 @Input() infinite:boolean=false;
 @Input() imagePopup:boolean=false;
 @Input() showArrow:boolean=true;
 @Input() autoSlide :number=1;
 @Input() animationSpeed :number=1;

  imagePopupZoom(){
    this.imagePopup=true;
  setTimeout(()=>{
    // @ts-ignore
    document.querySelector('.image-popup').click();
    this.imagePopup=false;
  });
  }

}
