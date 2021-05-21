import { AppRoutingModule } from './../../app-routing/app-routing.module';
import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, Output, EventEmitter, Inject } from '@angular/core';


import { NgForm } from '@angular/forms';
//import * as $ from "jquery";
//import { FilterPipe } from '../../../pipes/filter.pipe';
import { Observable, Observer } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from '../../services/users.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';

import { Router } from '@angular/router';


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
 
  showLoading: boolean = true;

  constructor(private usersService: UsersService, public dialog: MatDialog, 
    private router: Router)
  {    
  }
  
  ngOnInit()
  {
    this.usersService.UserObservable.subscribe(
      (response: User) =>
      {
        this.users.push(response);
        sessionStorage.setItem('users', JSON.stringify(this.users));
      });
    
    if (sessionStorage.hasOwnProperty("users")) {
      console.log("No hace el get");
      this.users = JSON.parse(sessionStorage.getItem('users'));       
    }
    else {      
      console.log("Obtiene los usuarios")
      this.usersService.getAllUsers().subscribe(
        (response: User[]) =>
        {
          this.users = response;          
          this.usersService.updateSessionStorage(response);
          this.showLoading = false;
          //this.calculateNoOfPages();
        });
    }

    //this.clientLocations = this.clientLocationsService.getClientLocations();
  }

  onAnchorClick(index: number) {
    this.usersService.showUser = this.users[index];
  }
  
  createUser() {
    if (this.users.length > 0) {
      this.usersService.lastId = this.users[this.users.length-1].id;
    }
    else {
      this.usersService.lastId = 0;
    }
    this.router.navigateByUrl('/user');
  }

  onDeleteUser(id: number, i: number) {
    this.usersService.deleteUser(id);
    // let index = this.users.findIndex(function (users) {
    //   return users.id === id;
    // });
    // this.users.splice(index, 1); 
    this.users.splice(i, 1); 
    this.usersService.updateSessionStorage(this.users);   
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(CreateUserDialogComponent, {
  //     data: "Create User"
  //   }
  //   );
  //     dialogRef.afterClosed().subscribe(res => {console.log(res);
  //     if (res) {
  //       console.log("mensaje del yes")
  //     }
    
  //   });
  // }
  
}
