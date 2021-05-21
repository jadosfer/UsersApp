import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule    
  ],
  exports: [
    MatToolbarModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class MaterialModule { }
