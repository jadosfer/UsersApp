import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss']
})
export class CreateUserDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateUserDialogComponent>,  
    @Inject(MAT_DIALOG_DATA) public message: string) { }

  ngOnInit(): void {
  }

  onClickNO(): void {
    this.dialogRef.close();
  }

}
