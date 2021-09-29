import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  a="redsdfgsdg";

  x=true;
  btn_label = "Yellow";
  class_name="b";

  constructor() { }

  ngOnInit(): void {
  }


  demo(){
    this.x = !this.x;
    if(this.x){
      this.btn_label="Yellow";
      this.class_name="b";
    }
    else{
      
      this.class_name="y";
      this.btn_label="Blue";
    }
  }

  demo2(){
    console.log("welcome");
  }


}
