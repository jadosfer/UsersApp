import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  signUpForm: FormGroup;
  submitted: boolean;
  newUser: User;

  constructor(public usersService: UsersService, private formBuilder: FormBuilder, 
    private router: Router) {

    this.newUser = new User;   
   }

  ngOnInit(): void {
   
    this.signUpForm = this.formBuilder.group({
      
      id: [null, [ Validators.required]],
      name: [null, [ Validators.required]],
      username: [null, [ Validators.required]],    
      email: [null, [ Validators.required]],  
      addressStreet: [null],
      addressSuite: [null],
      addressCity: [null],     
      addressZipcode: [null],
      addressGeoLat: [null],
      addressGeoLng: [null],
      phone: [null],
      website: [null],     
      compName: [null],
      compCatchPhrase: [null],
      compBs: [null]
    });
    
  }

  onSubmitClick()
  {
    //Display current form value
    this.submitted = true;    

    if (this.signUpForm.valid) {
      this.newUser.id = this.signUpForm.get("id").value;
      this.newUser.name = this.signUpForm.get("name").value;
      this.newUser.username = this.signUpForm.get("username").value;      
      this.newUser.email = this.signUpForm.get("email").value;
      this.newUser.address.street = this.signUpForm.get("addressStreet").value;
      this.newUser.address.suite = this.signUpForm.get("addressSuite").value;      
      this.newUser.address.city = this.signUpForm.get("addressCity").value;
      this.newUser.address.zipcode = this.signUpForm.get("addressZipcode").value;
      this.newUser.address.geo.lat = this.signUpForm.get("addressGeoLat").value;
      this.newUser.address.geo.lng = this.signUpForm.get("addressGeoLng").value;
      this.newUser.phone = this.signUpForm.get("phone").value;
      this.newUser.website = this.signUpForm.get("website").value;
      this.newUser.company.name = this.signUpForm.get("compName").value;
      this.newUser.company.catchPhrase = this.signUpForm.get("compCatchPhrase").value;
      this.newUser.company.bs = this.signUpForm.get("compBs").value;

      //this.usersService.newUser = this.newUser;      
      this.usersService.createUser(this.newUser);
      this.router.navigateByUrl('/main');
    }
  }

  onCancelClick() {
    console.log("works");
    this.router.navigateByUrl('/main');
  }
}

