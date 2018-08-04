import { Component, OnInit,ViewChild, Inject } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Iproduct {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: Iproduct[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'}, 
];

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  animal
  name
  @ViewChild('myTable') myTable: MatTable<any>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  onAdd(){
    this.dataSource.push({position: 11, name: 'Neon', weight: 20.1797, symbol: 'Ne'});
    this.myTable.renderRows();
  }
  onDelete(msg){
    this.dataSource.splice(this.dataSource.indexOf(msg), 1);   
    this.myTable.renderRows();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      height: '400px',
      width: '600px',
      //panelClass:'my-center-dialog',
      data: {name: 'test', animal: 'dog'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'ProductAdd_dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}








 
