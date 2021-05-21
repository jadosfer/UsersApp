import { UsersService } from './services/users.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './components/user/user.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    MaterialModule      
  ],
  entryComponents: [],
  providers: [UsersService],
  bootstrap: [AppComponent]
})

export class AppModule { }