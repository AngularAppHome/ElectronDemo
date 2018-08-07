import { Component, OnInit ,ViewChild, Inject,Input} from '@angular/core';
import { UserserviceService, User } from "../../userservice.service";
import { MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserserviceService],
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  i:number=1
  //@ViewChild('myTable') myTable: MatTable<any>;
  @ViewChild('myTable') myTable: MatTable<any>;
  displayedColumns: string[] = [ 'name', 'username', 'password','email','phone'];
  constructor(private userservice: UserserviceService,
              public dialog: MatDialog) { }

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
  userdata = {
    name:"",
    username:"",
    emailid:"",
    password:"",
    phone:""
  };
  openDialog(): void {
    const dialogRef = this.dialog.open(UserDialog, {
      height: '300px',
      width: '800px',
      panelClass:'my-center-dialog',
      data: { name: this.userdata.name, username: this.userdata.username,
        emailid:this.userdata.emailid,password:this.userdata.password,phone:this.userdata.phone }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}

@Component({
  selector: 'user_dialog',
  templateUrl: 'userDialog.component.html',
  providers: [UserserviceService],
  styleUrls: ['./userAdd_dialog.scss']
})
export class UserDialog { 
  //@ViewChild(UserComponent) userchild:UserComponent;
  @ViewChild('myTable') myTable: MatTable<any>;
  displayedColumns: string[] = [ 'name', 'username', 'password','email','phone'];
  constructor(   
    public dialogRef: MatDialogRef<UserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private userservice: UserserviceService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  users: User[];
  userdata = {};
  onAdd(){  
    debugger  
    this.userservice.addUser(this.userdata)
      .subscribe(data => {
        this.onNoClick();
       //this.userchild.loadUser();    //this.router.navigate(['product']);
        //this.myTable.renderRows();      
      });
  }
}









