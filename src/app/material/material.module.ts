import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,    
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule  
  ],
  exports: [
    MatToolbarModule,    
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ]
})
export class MaterialModule { }
