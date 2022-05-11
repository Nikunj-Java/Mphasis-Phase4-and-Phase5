import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:string="Nikunj Soni";
  age:number=35;
  url:string="https://www.google.com";
  we:number=700;

  products=[{name:"pencil",price:"8.3",available:"05-05-2022",rating:4.8},
            {name:"pen",price:"10",available:"10-05-2022",rating:4.6},
            {name:"eraser",price:"5.5",available:"05-06-2022",rating:5},
            {name:"scale",price:"20",available:"05-08-2022",rating:4},
            {name:"strencil",price:"15",available:"05-09-2022",rating:3.5},
          ]

  flag=false;
  show(){
    this.flag=!this.flag;
  }

}
