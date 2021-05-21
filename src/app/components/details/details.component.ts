import { UsersService } from './../../services/users.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';

import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { Address } from 'src/app/models/address';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user: User = new User; 
  keys = Object.keys(this.user);
  data = Object.values(this.user);
  


  constructor(public usersService: UsersService, private router: Router) {
    this.user = this.usersService.showUser;
   }

  ngOnInit(): void {        
    //this.dataSource = Object.keys(this.user);   
    console.log(this.user)
    
   }

   onBackClick() {
    this.router.navigateByUrl('/main');
   }

}
