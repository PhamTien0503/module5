import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-slide',
  templateUrl: './img-slide.component.html',
  styleUrls: ['./img-slide.component.css']
})
export class ImgSlideComponent implements OnInit {
  numberArray: number[] = [
    1, 2, 3, 4, 5, 6
  ];
  index = 0;
  slide: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  next() {
    if (this.index <= (this.numberArray.length - 2) && this.index >= 0) {
      this.index += 1;
      this.slide = this.numberArray[this.index];
    } else {
      this.index = 0;
      this.slide = this.numberArray[this.index];
    }
  }

  previous() {
    if (this.index <= (this.numberArray.length - 1) && this.index > 0) {
      this.index -= 1;
      this.slide = this.numberArray[this.index];
    } else {
      this.index = this.numberArray.length - 1;
      this.slide = this.numberArray[this.index];
    }
  }
}
