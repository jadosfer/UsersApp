import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from '../models/user';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public UserObservable: Observable<User>;
  private MyObservers: Observer<User>[] = [];
  public CancelObservable: Observable<boolean>;
  private CancelObservers: Observer<boolean>[] = [];
  
  
  newUser: User = new User;
  showUser: User; 
  visible: boolean = false;
  

  constructor(private httpClient : HttpClient) {    
    this.UserObservable = Observable.create((observer: Observer<User>)=>{
      this.MyObservers.push(observer);
    }); 
    this.CancelObservable = Observable.create((cancelObserver: Observer<boolean>)=>{
      this.CancelObservers.push(cancelObserver);
    }); 
  }
    
  getAllUsers() : Observable<User[]>
  {
    return this.httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users", { responseType: "json" })
    .pipe(map(
      (data: User[]) => {                
        return data;
      }
    ));
  }

  deleteUser(id: number): Observable<User>
  {    
    return this.httpClient.delete<User>("https://jsonplaceholder.typicode.com/posts/" + id, { responseType: "json" });    
  }
  
  createUser(newUser?: User) {
    this.newUser = newUser;
    for (let i=0;i<this.MyObservers.length;i++) {
      this.MyObservers[i].next(this.newUser);    
    }  
    for (let i=0;i<this.MyObservers.length;i++) {  
      this.CancelObservers[i].next(false); 
      }  
  } 

  cancelCreateUser() {    
    for (let i=0;i<this.MyObservers.length;i++) {  
    this.CancelObservers[i].next(false); 
    }     
  }

  updateSessionStorage(users: User[]) {
    sessionStorage.setItem('users', JSON.stringify(users));
  }
 
}

