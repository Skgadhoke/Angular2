import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { NavBarComponent } from './navbar.component'; 
import { SideBarComponent } from './sidebar.component'; 
import { DisplayComponent } from './display.component'; 
import { FooterComponent } from './footer.component'; 

@NgModule({
  imports:      [ BrowserModule, FormsModule ],

  declarations:
    [ AppComponent,
      NavBarComponent, 
      SideBarComponent,
      DisplayComponent,
      FooterComponent ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
