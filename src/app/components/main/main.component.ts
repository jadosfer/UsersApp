import { UserSenderService } from './../../services/user-sender.service';
import { AppRoutingModule } from './../../app-routing/app-routing.module';
import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, Output, EventEmitter, Inject } from '@angular/core';

import { NgForm } from '@angular/forms';
//import * as $ from "jquery";
//import { FilterPipe } from '../../../pipes/filter.pipe';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from '../../services/users.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';


export interface DialogData {
  name: string;
  email: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit
{
  users: User[] = [];
  newUser: User;
 
  //clientLocations: Observable<ClientLocation[]>;
  showLoading: boolean = true;

  // newUser: User = new User();
  // editUser: User = new User();
  // editIndex: number = null;
  // deleteUser: User = new User();
  // deleteIndex: number = null;
  // searchBy: string = "projectName";
  // searchText: string = "";

  currentPageIndex: number = 0;
  pages: any[] = [];
  pageSize: number = 3;

  @ViewChild("newForm") newForm: NgForm;
  @ViewChild("editForm") editForm: NgForm;

  //constructor(private projectsService: ProjectsService, private clientLocationsService: ClientLocationsService)
  constructor(private userService: UsersService, public userSenderService: UserSenderService, public dialog: MatDialog)
  {
  }
  
  ngOnInit()
  {
    if (this.users.length !== 0) {
      console.log("No hace el get")
    }
    else {      
      console.log("Obtiene los usuarios")
      this.userService.getAllUsers().subscribe(
        (response: User[]) =>
        {
          this.users = response;
          this.showLoading = false;
          //this.calculateNoOfPages();
        } 
      );
    }

    //this.clientLocations = this.clientLocationsService.getClientLocations();
  }

  onAnchorClick(index: number) {
    this.userSenderService.user = this.users[index];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserDialogComponent, {
      data: "Create User"
    }
    );
      dialogRef.afterClosed().subscribe(res => {console.log(res);
      if (res) {
        console.log("mensaje del yes")
      }
    
    });
  }
  
}
