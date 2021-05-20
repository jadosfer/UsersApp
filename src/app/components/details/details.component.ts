import { UserSenderService } from './../../services/user-sender.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user: User;

  constructor(public userSenderService: UserSenderService) { }

  ngOnInit(): void {
    this.user = this.userSenderService.user;
  }

}
