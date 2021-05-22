import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user: User = new User;

  constructor(public usersService: UsersService, private router: Router) {
    this.user = this.usersService.showUser;
   }

  ngOnInit(): void {    
   }

   onBackClick() {
    this.router.navigateByUrl('/main');
   }

}
