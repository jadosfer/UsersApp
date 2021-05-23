import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from '../../services/users.service';



import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit
{
  users: User[] = [];
  newUser: User; 
  visible: boolean = false; 
  showLoading: boolean = true;

  constructor(private usersService: UsersService, 
    private router: Router)
  {    
  }
  
  ngOnInit()
  {    
    this.usersService.CreateObservable.subscribe(
      (response: User) =>
      {
        this.users.push(response);
        sessionStorage.setItem('users', JSON.stringify(this.users));
        this.visible = false;
      });

    this.usersService.UpdateObservable.subscribe(
      (response: User) =>
      {         
        let index = this.users.findIndex(i => i.id === this.usersService.id)
        this.users[index] = response;        
        sessionStorage.setItem('users', JSON.stringify(this.users));
        this.visible = false;
      });
    
    this.usersService.CancelObservable.subscribe(
      (response: boolean) =>
      {
        this.visible = response;
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
  
  onCreateUser(user?:User) {    
    this.visible = true; 
    this.usersService._updateUser = null;
    this.usersService.updateCreate = false;
  }

  onDeleteUserClick(id: number, i: number) {
    this.usersService.deleteUser(id);    
    this.users.splice(i, 1); 
    this.usersService.updateSessionStorage(this.users);   
  }

  onUpdateUserClick(id: number, i: number) {    
    this.usersService._updateUser = this.users[i];
    this.visible = true;    
    this.usersService.updateCreate = true;
  }
}
