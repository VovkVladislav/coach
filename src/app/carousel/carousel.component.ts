import { Component, OnInit } from '@angular/core';
import {authInd} from 'src/app/app.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  isAuth = authInd;
  constructor() { }

  ngOnInit(): void {
  }

}
