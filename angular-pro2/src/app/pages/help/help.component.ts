import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  color = ["red", "green", "blue", "yellow", "pink", "black"];

  data = [
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name : "amar",
      age : 21,
      city : "mumbai"
    },
    {
      age : 23,
      name : "radhika",
      city : "pune"
    },
    {
      name : "nilesh",
      age : 28,
      city : "ujjain"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
