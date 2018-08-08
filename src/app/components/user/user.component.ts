import { Component, OnInit ,ViewChild, Inject} from '@angular/core';
import { UserserviceService, User } from "../../userservice.service";
import { MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  displayedColumns: string[] = [ 'name', 'username', 'password','email','phone','action'];
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
  userdata :User 
  openDialog(): void {
    const dialogRef = this.dialog.open(UserDialog, {
      // height: '600px',
      // width: '500px',
      panelClass:'my-center-dialog',
      //data: this.userdata
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log('The dialog was closed');
      this.loadUser();
      //this.myTable.renderRows();
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
  // @ViewChild('myTable') myTable: MatTable<any>;
  // displayedColumns: string[] = [ 'name', 'username', 'password','email','phone','action'];
  constructor(   
    public dialogRef: MatDialogRef<UserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    //@Inject(MAT_DIALOG_DATA) 
    private userservice: UserserviceService) {
      //this.userdata =data
     }

  onNoClick(): void {
    this.dialogRef.close();
  }
  //data:User
  //users: User[];
  //userdata = {};
  onAdd(){  
    debugger  
    this.userservice.addUser(this.data)
      .subscribe(d => {
        this.onNoClick();
       //this.userchild.loadUser();    //this.router.navigate(['product']);
              
      });
  }
}









