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
}
