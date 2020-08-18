import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurkeymapComponent } from './turkeymap/turkeymap.component';
import { TurkeymapdetailsComponent } from './turkeymapdetails/turkeymapdetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'eczane', pathMatch: 'full' },
  {path:'eczane',component:TurkeymapComponent},
  {path:'eczane/:id',component:TurkeymapdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
