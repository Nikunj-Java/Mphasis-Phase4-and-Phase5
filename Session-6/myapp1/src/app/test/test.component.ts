import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { UserClass } from '../user';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

 //inject the service
 constructor( private service:DataServiceService) { }

 users:UserClass[];
 
 ngOnInit(): void {
   this.service.getAllUsers().subscribe(result=>this.users=result);
 }

}
