import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from '../models/user';
import { map } from "rxjs/operators";
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public UserObservable: Observable<User>;
  private MyObservers: Observer<User>[] = [];
  
  newUser: User = new User;
  showUser: User;
  lastId: number;
  

  constructor(private httpClient : HttpClient) {    
    this.UserObservable = Observable.create((observer: Observer<User>)=>{
      this.MyObservers.push(observer);
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

  deleteProject(ProjectID: number) : Observable<string>
  {
    return this.httpClient.delete<string>("/api/projects?ProjectID=" + ProjectID);
  }

  createUser(newUser?: User) {
    this.newUser = newUser;
    for (let i=0;i<this.MyObservers.length;i++) {
      this.MyObservers[i].next(this.newUser);    
    }    
  }

  updateSessionStorage(users: User[]) {
    sessionStorage.setItem('users', JSON.stringify(users));
  }


  // insertUser(newUser: User) : Observable<User>
  // {
  //   var requestHeaders = new HttpHeaders();
  //   requestHeaders = requestHeaders.set("X-XSRF-TOKEN", sessionStorage.XSRFRequestToken);
  //   return this.httpClient.post<User>("/api/Users", newUser, { headers: requestHeaders, responseType: "json" });
  // }

  // updateUser(existingUser: User) : Observable<User>
  // {
  //   return this.httpClient.put<User>("/api/Users", existingUser, { responseType: "json" });
  // }

  // deleteUser(id: number) : Observable<string>
  // {
  //   return this.httpClient.delete<string>("/api/Users?UserID=" + id);
  // }

  // SearchUsers(searchBy: string, searchText: string) : Observable<User[]>
  // {
  //   return this.httpClient.get<User[]>("/api/Users/search/" + searchBy + "/" + searchText, { responseType: "json" });
  // }
}

