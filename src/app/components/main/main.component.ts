import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from '../../services/users.service';



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

  constructor(private usersService: UsersService, 
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
        });
    }
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
    this.users.splice(i, 1); 
    this.usersService.updateSessionStorage(this.users);   
  }
}
