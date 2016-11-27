import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { NavBarComponent } from './navbar.component'; 
import { FooterComponent } from './footer.component'; 

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NavBarComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
