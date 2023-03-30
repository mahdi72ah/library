import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {NgImageSliderComponent} from 'ng-image-slider';

@Component({
  selector: 'app-shared-slider-component',
  templateUrl: './shared-slider-component.component.html',
  styleUrls: ['./shared-slider-component.component.css']
})
export class SharedSliderComponentComponent implements OnInit{

  infinite: boolean = true;
  imagePopup: boolean = false;
  animationSpeed: number = 0;


  @Input() images: any[] = [];


  @Output() showSlider = new EventEmitter();

  @ViewChild('nav') slider: NgImageSliderComponent | undefined;

  constructor() {
  }


  ngOnInit(): void {
  } //end ngOnInit

  imagePopupZoom() {
    this.imagePopup = true;
    setTimeout(() => {
      // @ts-ignore
      document.querySelector('.image-popup').click();
      this.imagePopup = false;
    });
  }

  close() {
    this.showSlider.emit(false);
  }


  click(e: Event) {
    console.log('eeeeeee', this.slider);
    // @ts-ignore
    console.log('vvv', this.slider!.ligthboxImageObj[this.slider!.visiableImageIndex].image.toString());
// @ts-ignore
    this.download(this.slider!.ligthboxImageObj[this.slider!.visiableImageIndex].image.toString());
  }

  download(url: any) {
    const link = document.createElement('a');
    link.href = url;
    // @ts-ignore
    link.download = this.slider!.ligthboxImageObj[this.slider!.visiableImageIndex].title.toString();// نامی که به اون سند من ذخیره میشه
    link.click();
  }



}
