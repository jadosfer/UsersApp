import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  panelOpenState=false;
  
  constructor(private router: Router)
    {
    }

  ngOnInit() {  
    
  }

  goToCreateUser() {
    this.router.navigate(['/details']);
  }
}
