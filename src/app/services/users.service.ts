import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from '../models/user';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public CreateObservable: Observable<User>;
  private CreateObservers: Observer<User>[] = [];
  public UpdateObservable: Observable<User>;
  private UpdateObservers: Observer<User>[] = [];
  public CancelObservable: Observable<boolean>;
  private CancelObservers: Observer<boolean>[] = [];  
  
  newUser: User = new User;  
  _updateUser: User = new User;
  showUser: User; 
  visible: boolean = false;
  updateCreate: boolean = false;
  id: number = 0;
  

  constructor(private httpClient : HttpClient) {    
    this.CreateObservable = Observable.create((observer: Observer<User>)=>{
      this.CreateObservers.push(observer);
    }); 
    this.UpdateObservable = Observable.create((observer: Observer<User>)=>{
      this.UpdateObservers.push(observer);
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
  
  createUser(user?: User) {
    this.newUser = user;
    for (let i=0;i<this.CreateObservers.length;i++) {
      this.CreateObservers[i].next(this.newUser);    
    }    
  } 

  updateUser(id: number, user: User): Observable<User>
  {
    this._updateUser = user;
    for (let i=0;i<this.UpdateObservers.length;i++) {
      this.UpdateObservers[i].next(this._updateUser);    
    }     
    return this.httpClient.delete<User>("https://jsonplaceholder.typicode.com/posts/" + id, { responseType: "json" });    
  }

  
   
  cancelCreateUser() {    
    for (let i=0;i<this.CancelObservers.length;i++) {  
    this.CancelObservers[i].next(false); 
    }     
  }

  updateSessionStorage(users: User[]) {
    sessionStorage.setItem('users', JSON.stringify(users));
  } 
}


