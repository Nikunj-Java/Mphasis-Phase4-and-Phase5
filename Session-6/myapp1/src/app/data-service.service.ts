import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { UserClass } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

//url: https://jsonplaceholder.typicode.com/users

url:string="https://jsonplaceholder.typicode.com/users";

//inject the dependency
  constructor(private http:HttpClient) { 
  }

  getAllUsers():Observable<UserClass[]>{
    return this.http.get<UserClass[]>(this.url);
    
  }
}
