import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { DetailsComponent } from '../components/details/details.component';


const routes: Routes = [
  { path: "", redirectTo: "main", pathMatch: "full" },
  { path: "main", component: MainComponent },
  { path: "details", component: DetailsComponent }, 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
