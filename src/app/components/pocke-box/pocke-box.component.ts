import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocke-box',
  templateUrl: './pocke-box.component.html',
  styleUrls: ['./pocke-box.component.css'],
})
export class PockeBoxComponent implements OnInit {
  @Input()
  title!: string;
  @Input()
  text!: string;
  @Input()
  image!: string;
  constructor() {}

  ngOnInit(): void {}

  onLoadedImage(img: HTMLImageElement) {
    img.classList.remove('loading-animation');
  }
  onErrorImage(img: HTMLImageElement) {
    img.classList.remove('loading-animation')
    img.src =
      'https://i.pinimg.com/originals/fd/78/c4/fd78c47f2a009df65b5b5a46f4437399.png';
  }
}
