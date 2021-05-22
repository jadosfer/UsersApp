import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  user: User;  
  updateUser: User;

  constructor(public usersService: UsersService, private formBuilder: FormBuilder, 
    private router: Router) {

    this.user = new User;   
   }

  ngOnInit(): void {

    this.signUpForm = this.formBuilder.group({

      id: [null, [ Validators.required]],
      name: [null, [ Validators.required]],
      username: [null, [ Validators.required]],          
      email: [null, [ Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
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

  ngAfterContentInit() {
    this.updateUser = this.usersService._updateUser;
    if (this.usersService._updateUser !== null) {      
      console.log(this.updateUser.name);      
      console.log(this.usersService._updateUser.name);
      this.signUpForm.get("id").setValue(this.updateUser.id);
      this.signUpForm.get("name").setValue(this.updateUser.name);
      this.signUpForm.get("username").setValue(this.updateUser.username);      
      this.signUpForm.get("email").setValue(this.updateUser.email);
      this.signUpForm.get("addressStreet").setValue(this.updateUser.address.street);
      this.signUpForm.get("addressSuite").setValue(this.updateUser.address.suite); 
      this.signUpForm.get("addressCity").setValue(this.updateUser.address.city);
      this.signUpForm.get("addressZipcode").setValue(this.updateUser.address.zipcode);
      this.signUpForm.get("addressGeoLat").setValue(this.updateUser.address.geo.lat);
      this.signUpForm.get("addressGeoLng").setValue(this.updateUser.address.geo.lng);
      this.signUpForm.get("phone").setValue(this.updateUser.phone);
      this.signUpForm.get("website").setValue(this.updateUser.website);
      this.signUpForm.get("compName").setValue(this.updateUser.company.name);
      this.signUpForm.get("compCatchPhrase").setValue(this.updateUser.company.catchPhrase);
      this.signUpForm.get("compBs").setValue(this.updateUser.company.bs);
    }
  }

  ngOnDestroy() {

  }

  onSubmitClick()
  {    
    this.submitted = true;    

    if (this.signUpForm.valid) {
      this.user.id = this.signUpForm.get("id").value;
      this.user.name = this.signUpForm.get("name").value;
      this.user.username = this.signUpForm.get("username").value;      
      this.user.email = this.signUpForm.get("email").value;
      this.user.address.street = this.signUpForm.get("addressStreet").value;
      this.user.address.suite = this.signUpForm.get("addressSuite").value;      
      this.user.address.city = this.signUpForm.get("addressCity").value;
      this.user.address.zipcode = this.signUpForm.get("addressZipcode").value;
      this.user.address.geo.lat = this.signUpForm.get("addressGeoLat").value;
      this.user.address.geo.lng = this.signUpForm.get("addressGeoLng").value;
      this.user.phone = this.signUpForm.get("phone").value;
      this.user.website = this.signUpForm.get("website").value;
      this.user.company.name = this.signUpForm.get("compName").value;
      this.user.company.catchPhrase = this.signUpForm.get("compCatchPhrase").value;
      this.user.company.bs = this.signUpForm.get("compBs").value;
      this.usersService.id = this.user.id; 
      if (this.usersService.updateCreate) {
        this.usersService.updateUser(this.user);        
      }
      else {
        this.usersService.createUser(this.user); 
      }   
    }
  }  

  onCancelClick() {      
    this.usersService.cancelCreateUser(); 
  }  
}

