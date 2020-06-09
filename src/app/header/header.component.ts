import { Component, OnInit } from '@angular/core';
import {authInd} from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth = authInd;
  constructor() { }

  ngOnInit(): void {
  }

}
