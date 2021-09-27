import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  x= "ram";

  
  a = "rohit";
  b = 100;
  c = true;
  d = ["red", "green", "blue"];

  constructor() { }

  ngOnInit(): void {
  }

}
