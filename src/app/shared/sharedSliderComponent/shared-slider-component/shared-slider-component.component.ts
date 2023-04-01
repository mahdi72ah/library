import {
  Component, ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output, VERSION,
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
  animationSpeed: number = 0;
  name = 'Angular ' + VERSION.major;
  isZoomed = false;
  pos = { top: 0, left: 0, x: 0, y: 0 };
  src:string='';


  @Input() images: any[] = [];
  @Input() imagePopup: boolean = false;
  @Input() showArrow: boolean = true;


  @Output() showSlider = new EventEmitter();

  @ViewChild('nav') slider: NgImageSliderComponent | undefined;
  @ViewChild('container') 'container': ElementRef;
  @ViewChild('img') 'img': ElementRef;
  @ViewChild('zoomout') 'zoomout': ElementRef;
  @ViewChild('zoomIcon') 'zoomIcon': ElementRef;
  @ViewChild('closesefid') 'closesefid': ElementRef;
  @ViewChild('closesiah') 'closesiah': ElementRef;
  @ViewChild('downloadsefid') 'downloadsefid': ElementRef;
  @ViewChild('downloadsiah') 'downloadsiah': ElementRef;
  @ViewChild('fullsefid') 'fullsefid': ElementRef;
  @ViewChild('fullsiah') 'fullsiah': ElementRef;


  constructor(private el: ElementRef) {
  }

  zoom(){
      // @ts-ignore
    this.src=this.slider!.ligthboxImageObj[this.slider!.visiableImageIndex].image.toString();
    this.container.nativeElement.classList.add('show');

    this.zoomout.nativeElement.classList.add('show');
    this.closesiah.nativeElement.classList.add('show');
    this.downloadsiah.nativeElement.classList.add('show');
    this.fullsiah.nativeElement.classList.add('show');


    this.zoomIcon.nativeElement.classList.add('hide');
    this.closesefid.nativeElement.classList.add('hide');
    this.downloadsefid.nativeElement.classList.add('hide');
    this.fullsefid.nativeElement.classList.add('hide');

  }

  zoomOut(){
    debugger;
    // @ts-ignore
    this.src='';
    this.container.nativeElement.classList.remove('show');

    this.zoomout.nativeElement.classList.remove('show');
    this.zoomIcon.nativeElement.classList.remove('hide');
    this.zoomIcon.nativeElement.classList.add('show');

    this.closesiah.nativeElement.classList.remove('show');
    this.closesefid.nativeElement.classList.remove('hide');
    this.closesefid.nativeElement.classList.add('show');

    this.downloadsiah.nativeElement.classList.remove('show');
    this.downloadsefid.nativeElement.classList.remove('hide');
    this.downloadsefid.nativeElement.classList.add('show');

    this.fullsiah.nativeElement.classList.remove('show');
    this.fullsefid.nativeElement.classList.remove('hide');
    this.fullsefid.nativeElement.classList.add('show');
  }


  onClick(e:any) {
    console.log(e.clientY, e.clientX);
    this.isZoomed = !this.isZoomed;
    if (this.isZoomed) {
      this.container.nativeElement.style.overflow = 'hidden';
      this.img.nativeElement.style.width = '200%';
      this.img.nativeElement.style.cursor = 'zoom-out';
      this.img.nativeElement.style.cursor = 'zoom-out';
      this.img.nativeElement.style.left = `-${e.clientX}`;
      this.img.nativeElement.style.top = `-${e.clientY}`;
    } else {
      this.container.nativeElement.style.overflow = 'hidden';
      this.img.nativeElement.style.width = '100%';
      this.img.nativeElement.style.cursor = 'zoom-in';
    }
  }
  onMouseDown(e:any) {
    this.pos = {
      // The current scroll
      left: this.container.nativeElement.scrollLeft,
      top: this.container.nativeElement.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };
  }

  mouseMoveHandler(e:any) {
    // How far the mouse has been moved
    const dx = (e.clientX - this.pos.x) * 2;
    const dy = (e.clientY - this.pos.y) * 3;

    // Scroll the element
    this.container.nativeElement.scrollTop = this.pos.top - dy;
    this.container.nativeElement.scrollLeft = this.pos.left - dx;
  }

  onLeave() {
    this.container.nativeElement.style.overflow = 'hidden';
    this.img.nativeElement.style.transform = 'scale(1)';
    this.img.nativeElement.style.cursor = 'zoom-in';
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
