import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from '../models/user';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
 
  private MyObservers: Observer<boolean>[] = [];

  constructor(private httpClient : HttpClient) { }

  getAllUsers() : Observable<User[]>
  {
    return this.httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users", { responseType: "json" })
    .pipe(map(
      (data: User[]) => {                
        return data;
      }
    ));
  }

  getUserByUserID(UserID: number): Observable<User>
  {
    return this.httpClient.get<User>("https://jsonplaceholder.typicode.com/users" + UserID, { responseType: "json" });
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

