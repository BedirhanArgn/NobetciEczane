import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TurkeymapComponent } from './turkeymap/turkeymap.component';
import { TurkeymapdetailsComponent } from './turkeymapdetails/turkeymapdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    TurkeymapComponent,
    TurkeymapdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
