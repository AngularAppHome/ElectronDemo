import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { MatTable } from '@angular/material/table';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://nodeapi01.herokuapp.com/users';
  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }
  addUser(data) {
    let httpHeaders = new   HttpHeaders().set('Content-Type','application/json')
    let options ={headers:httpHeaders}
    return this.http.post<User[]>(this.baseUrl,data,options);
  }
  deleteUser(id){
    return this.http.delete(this.baseUrl + '/' + id);
    //return this.http.delete<User[]>(this.baseUrl + '/' + id);
  }
  getUserById(id){
    return this.http.get<User>(this.baseUrl+ '/' + id);
  }
  editUser(data){
    let httpHeaders = new   HttpHeaders().set('Content-Type','application/json')
    let options ={headers:httpHeaders}
    return this.http.put(this.baseUrl + '/' + data._id, data,options);
  }
}

export interface User{
  _id :string,
  name:string,  
  username:string,
  password:string,
  email:string,
  phone:string
}




  



