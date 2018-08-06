import { Component, OnInit ,ViewChild} from '@angular/core';
import { UserserviceService, User } from "../../userservice.service";
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserserviceService],
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  i:number=1
  @ViewChild('myTable') myTable: MatTable<any>;
  displayedColumns: string[] = [ 'name', 'username', 'password','email','phone'];
  constructor(private userservice: UserserviceService) { }

  users: User[];
  ngOnInit() {
    
    this.loadUser()
  }
  loadUser(){
    this.userservice.getUsers()
      .subscribe(data => {
        this.users = data;
        this.myTable.renderRows();
      });
  }
  onAdd(){
    var userdata = {'name':'test', 'username':'test', 'password':'test','email':'test','phone':'test'}
    this.userservice.addUser(userdata)
      .subscribe(data => {
        this.loadUser()
        //this.myTable.renderRows();
      });
  }
}


