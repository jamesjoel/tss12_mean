import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // property
  x= "ram";

  
  a = "rohit";
  b = 100;
  c = true;
  d = ["red", "green", "blue"];


  name="Ram Ojha";

  cou=0;

  constructor() { }

  ngOnInit(): void {
  }

  // this is a method
  demo1(){
    //console.log("hello world");
    this.cou++;
  }


  

}
