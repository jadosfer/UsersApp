import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { UserComponent } from './components/user/user.component';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateUserDialogComponent } from './components/create-user-dialog/create-user-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailsComponent,
    UserComponent,
    CreateUserDialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule        
  ],
  entryComponents: [CreateUserDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }