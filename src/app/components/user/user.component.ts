import { Component, OnInit ,ViewChild, Inject} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserserviceService, User } from "../../userservice.service";
import { MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserserviceService],
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isPopupOpened = true;
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
  openDialog(d): void {
    const dialogRef = this.dialog.open(UserDialog, {
      // height: '600px',
      // width: '500px',
      panelClass:'my-center-dialog',
      data: d
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadUser();
      //this.myTable.renderRows();
      //this.animal = result;
    });
  }
  contact :User
  editUser(id: number) {
    this.isPopupOpened = true;
    
    this.userservice.getUserById(id) .subscribe(data => {
      this.contact = data
      this.openDialog(data)
    });
    // const dialogRef = this.dialog.open(UserDialog, {
    //   data: this.contact
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   this.isPopupOpened = false;
    // });

    
  }
  deleteUser(id: number) {
    this.userservice.deleteUser(id)
    .subscribe( data => {
      //this.users = this.users.filter(u => u !== user);
      this.loadUser();
    })
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
  public _contactForm: FormGroup;
  constructor( private _formBuilder: FormBuilder,  
    public dialogRef: MatDialogRef<UserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    //@Inject(MAT_DIALOG_DATA) 
    private userservice: UserserviceService) {
      //this.userdata =data
     }
     ngOnInit() {
      this._contactForm = this._formBuilder.group({
        _id: [this.data._id],
        name: [ this.data.name, [Validators.required]],
        username: [ this.data.username, [Validators.required]],
        password: [ this.data.password, [Validators.required]],
        email: [ this.data.email , [Validators.required]],
        phone: [ this.data.phone , [Validators.required]],
      });
    }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  //data:User
  //users: User[];
  //userdata = {};
  onSubmit(){  
    if (this.data._id==undefined) {
      this.userservice.addUser(this._contactForm.value)
      .subscribe(d => {
        this.onNoClick();
       //this.userchild.loadUser();    //this.router.navigate(['product']);
              
      });
    } else {
      this.userservice.editUser(this._contactForm.value);
      this.dialogRef.close();
    }
    
  }
}









