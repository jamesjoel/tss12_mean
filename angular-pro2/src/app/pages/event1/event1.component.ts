import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event1',
  templateUrl: './event1.component.html',
  styleUrls: ['./event1.component.css']
})
export class Event1Component implements OnInit {

  text_bg_color = "white";
  constructor() { }

  ngOnInit(): void {
  }

  demo1(){
    console.log("this is mouse over event");
  }
  demo2(){
    console.log("this is mouse move");
  }
  demo3(){
    console.log("this is mouse out");
  }

  demo4(){
    console.log("this is key down");
  }
  demo5(){
    console.log("this is key press");
  }

  demo6(){
    console.log("this is key up");
  }
  demo7(){
    this.text_bg_color = "blue";
  }
  demo8(){
    this.text_bg_color = "red";
  }

  demo9(){
    console.log("change event call");
  }

  demo11(){
    console.log("right button click");
  }
}
